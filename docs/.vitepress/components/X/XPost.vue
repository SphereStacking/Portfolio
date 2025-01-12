<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useDark } from '@vueuse/core'

interface Props {
  xPostId?: string;
  xPostUrl?: string;
  conversation?: 'all' | 'none';
  cards?: 'visible' | 'hidden';
  width?: string | number;
  align?: 'left' | 'right' | 'center';
  theme?: 'light' | 'dark' | 'auto';
  lang?: string;
  dnt?: boolean;
}

const isDark = useDark()

const props = defineProps<Props>()

// テーマを動的に設定
const theme = computed(() => props.theme || (isDark.value ? 'dark' : 'light'))

const xPostContainerRef = ref<HTMLElement | null>(null)
const X_POST_ID_REGEX = /^\d+$/;
const X_POST_URL_REGEX = /^(https?:\/\/)?(www\.)?(twitter|x)\.com\/.*\/status(?:es)?\/(\d+)(?:\/)?$/i;
const scriptId = 'x-wjs'
const scriptSrc = 'https://platform.x.com/widgets.js'

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (tweetId: string | undefined, container: HTMLElement | null, options?: Props) => void;
      };
    };
  }
}

const isValidTweetId = (id: string): boolean => X_POST_ID_REGEX.test(id);
const extractTweetIdFromUrl = (url: string): string | null => {
  const match = url.trim().match(X_POST_URL_REGEX);
  return match ? match[4] : null;
}

const clearDom = () => {
  if (xPostContainerRef.value) {
    xPostContainerRef.value.innerHTML = ''
  }
}

const getTweetParams = () => {
  const { xPostId: rawTweetId, xPostUrl, ...xPostOptions } = props;
  let xPostId = rawTweetId;

  if (rawTweetId && xPostUrl) {
    throw new Error("xPost-id と xPost-url の両方を指定することはできません。");
  }
  if (!xPostId && !xPostUrl) {
    throw new Error("xPost-id または xPost-url のいずれかを指定する必要があります。");
  }
  if (rawTweetId && !isValidTweetId(rawTweetId)) {
    throw new Error("ツイート ID が無効です。有効な数値のツイート ID を入力してください。");
  }

  if(xPostUrl) {
    const extractedTweetId = extractTweetIdFromUrl(xPostUrl);
    if (extractedTweetId) {
      xPostId = extractedTweetId;
    } else {
      throw new Error("ツイート URL が無効です。");
    }
  }
  return { xPostId, xPostOptions: { ...xPostOptions, theme: theme.value } };
}

const loadTwitterScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.twttr) {
      // すでにtwttrが存在する場合は即解決
      resolve()
      return
    }

    // スクリプトが既に存在するか確認
    const existingScript = document.getElementById('twitter-wjs')
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve())
      existingScript.addEventListener('error', () => reject(new Error('Twitterウィジェットのロードに失敗しました')))
      return
    }

    // 新しくスクリプトを作成して追加
    const script = document.createElement('script')
    script.id = scriptId
    script.src = scriptSrc
    script.async = true
    script.onload = () => {
      if (window.twttr) {
        resolve()
      } else {
        reject(new Error('Twitterウィジェットが正しく初期化されていません'))
      }
    }
    script.onerror = () => reject(new Error('Twitterウィジェットのロードに失敗しました'))
    document.body.appendChild(script)
  })
}

const renderTweet = async (): Promise<void> => {
  try {
    clearDom()
    await loadTwitterScript()
    const { xPostId, xPostOptions } = getTweetParams()
    if (window.twttr?.widgets) {
      window.twttr.widgets.createTweet(xPostId, xPostContainerRef.value, xPostOptions)
    } else {
      throw new Error('Twitterウィジェットが利用できません')
    }
  } catch (error) {
    console.error("ウィジェットのエラー:", error)
  }
}

watch(() => props, () => {
  renderTweet()
}, { deep: true })

onMounted(() => {
  renderTweet()
})
</script>

<template>
  <div ref="xPostContainerRef"></div>
</template>
