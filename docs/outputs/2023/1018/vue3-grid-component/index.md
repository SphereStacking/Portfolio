---
title: "vue3で table表示用のラッパーコンポーネントを作成してみた"
description: "vue3で table表示用のラッパーコンポーネントを作成してみた"
created_at: 2023-10-18T09:00:00+09:00
updated_at: 2023-10-18T09:00:00+09:00
lastUpdated: false
tags: ["vue3", "table", "component"]
outline: deep
prev:
  text: 'Markdown'
  link: '/guide/markdown'
next: false
thumbnail: {
  type: "icons",
  options: {
    icons: [
      { name: "logos:vue" },
      { name: "mdi:grid" },
    ]
  }
}
---

個人開発してみようと思い立ち
作業しているとテーブルを表示したくなったが

[daisyUI](https://daisyui.com/)に見てくれをよくするものはあったが
扱いやすくする処理はなかった

以前、テーブルを表示するときに[ag-grid](https://www.ag-grid.com/)好んで使っていたが
今回の使用用途ではそこまでのものは必要なかったため
自分で軽く書いてみた

機能は最低限のもので正直きれいではないと思う。

DataTable.vue

```vue
<script setup>
const props=defineProps({
  id: {
    type: String,
    required: true
  },
  columDefs: {
    type: Array,
    required: false
  },
  rowData: {
    type: Array,
    required: false
  },
})

</script>
<template>
  <div class="rounded-lg border-2">
    <table :id="id" class="table">
      <!-- head -->
      <thead>
        <tr>
          <td 
            v-for="(col,colIndex) in props.columDefs"
            :key="'col-head-' + colIndex">
            {{ col['headerName'] }}
          </td>
        </tr>
      </thead>
      <!-- tbody -->
      <tbody>
        <tr v-for="(row,rowIndex) in rowData" :key="'row-'+rowIndex">
          <template
            v-for="(col,colIndex) in props. columDefs"
            :key="'col-body-' + colIndex">
            <td>{{ row[col.fild] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="">

</style>
```

呼び出し

```vue
<script setup>
import DataTable from './DataTable.vue'
const columDefs= [
  { headerName: 'Row ID', field: 'id' },
  { headerName: 'Row make', field: 'make' },
  { headerName: 'Row model', field: 'model' },
  { headerName: 'Row price', field: 'price' },
]
const rowData = [
  { id: 'c1', make: 'Toyota', model: 'Celica', price: 35000 },
  { id: 'c2', make: 'Ford', model: 'Mondeo', price: 32000 },
  { id: 'c8', make: 'Porsche', model: 'Boxster', price: 72000 },
  { id: 'c4', make: 'BMW', model: 'M50', price: 60000 },
  { id: 'c14', make: 'Aston Martin', model: 'DBX', price: 190000 },
]
</script>

<template>
    <DataTable :columDefs="columDefs" :row-data="rowData" />
</template>
```

表示結果

![An image](./image.avif)
