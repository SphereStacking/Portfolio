<script setup lang="ts">
import { computed } from 'vue'
import Skills from './skil.json'

interface Skill {
  name: string;
  logo: string;
  class?: string;
}

const Knowledges: { category: string; skills: Skill[] }[] = [
  {
    category: '言語',
    skills: [
      { ...Skills.javascript },
      { ...Skills.typescript },
      { ...Skills.php },
      { ...Skills.cs },
      { ...Skills.cpp },
      { ...Skills.html },
      { ...Skills.css },
    ],
  },
  {
    category: 'FW',
    skills: [
      { ...Skills.laravel },
      { ...Skills.vue },
      { ...Skills.tailwind },
      { ...Skills.nuxt },
      { ...Skills.angular },
      { ...Skills.dotnet },
      { ...Skills.wordpress },
      { ...Skills.vuetify },
    ],
  },
  {
    category: 'Laravel ecosystem',
    skills: [
      { ...Skills.forge },
      { ...Skills.sail },
      { ...Skills.jetstream },
      { ...Skills.inertia },
      { ...Skills.scout }, 
      { ...Skills.socialite },
      { ...Skills.telescope },
      { ...Skills.pint },
    ],
  },
  {
    category: 'ライブラリ',
    skills: [
      { ...Skills.vueuse },
      { ...Skills.aggrid },
      { ...Skills.chartjs },
      { ...Skills.swiperjs },
      { ...Skills.fullcalendar },
      { ...Skills.tiptap },
    ],
  },
  {
    category: 'フォーマッター',
    skills: [
      { ...Skills.prettier },
      { ...Skills.eslint },
      { ...Skills.phpstan },
    ],
  },
  {
    category: 'データベース',
    skills: [
      { ...Skills.postgresql },
      { ...Skills.sqlserver },
    ],
  },
  {
    category: 'エディター',
    skills: [
      { ...Skills.cursor },
      { ...Skills.vscode },
      { ...Skills.visualstudio },
      { ...Skills.phpstorm },
    ],
  },
  {
    category: 'ツール',
    skills: [
      { ...Skills.slack },
      { ...Skills.notion },
      { ...Skills.jira },
    ],
  },
  {
    category: 'バージョン管理',
    skills: [
      { ...Skills.github },
      { ...Skills.gitlab },
    ],
  },
  {
    category: 'CI/CD',
    skills: [
      { ...Skills.githubactions },
    ],
  },
  {
    category: 'クラウド',
    skills: [
      { ...Skills.cloudflare },
      { ...Skills.aws },
      { ...Skills.digitalocean },
    ],
  },
  {
    category: 'その他',
    skills: [
      { ...Skills.nginx },
      { ...Skills.winui },
      { ...Skills.sentry },
      { ...Skills.meilisearch },
      { ...Skills.googleanalytics },
      { ...Skills.googledevelopers },
      { ...Skills.slidev },
      { ...Skills.nodejs },
      { ...Skills.openapi },
      { ...Skills.vite },
      { ...Skills.docker },
    ],
  },
]

</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-for="(knowledge, index) in Knowledges" :key="knowledge.category">
      <div class="border-b border-gray-200 my-2"></div>
      <div class="text-lg font-bold">{{ knowledge.category }}</div>
      <div class="flex flex-wrap gap-2">
        <div v-for="skill in knowledge.skills" :key="skill.name">
          <ruby>
            <img :src="skill.logo" :alt="skill.name" :class="skill.class" class="size-7">
            <rt>{{ skill.name }}</rt>
          </ruby>
        </div>
      </div>
    </div>
  </div>
</template>
