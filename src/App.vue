<style scoped>
</style>

<template>
  <div class="w-full h-full flex items-center justify-center" style="padding-top: 100px; padding-bottom: 100px;">
    <div>
      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text"/>
        <ml-button variation="left-icon-text"/>
        <ml-button variation="text-only"/>
        <ml-button variation="icon-only"/>
        <ml-button variation="text-only" state="disabled" text="Disabled"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text" type2="error"/>
        <ml-button variation="left-icon-text" type2="error"/>
        <ml-button variation="text-only" type2="error"/>
        <ml-button variation="icon-only" type2="error"/>
        <ml-button variation="text-only" state="disabled" text="Disabled" type2="error"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text" type2="warning"/>
        <ml-button variation="left-icon-text" type2="warning"/>
        <ml-button variation="text-only" type2="warning"/>
        <ml-button variation="icon-only" type2="warning"/>
        <ml-button variation="text-only" state="disabled" text="Disabled" type2="warning"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text" type2="success"/>
        <ml-button variation="left-icon-text" type2="success"/>
        <ml-button variation="text-only" type2="success"/>
        <ml-button variation="icon-only" type2="success"/>
        <ml-button variation="text-only" state="disabled" text="Disabled" type2="success"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text"/>
        <ml-button type="secondary" variation="left-icon-text"/>
        <ml-button type="secondary" variation="text-only"/>
        <ml-button type="secondary" variation="icon-only"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text" type2="error"/>
        <ml-button type="secondary" variation="left-icon-text" type2="error"/>
        <ml-button type="secondary" variation="text-only" type2="error"/>
        <ml-button type="secondary" variation="icon-only" type2="error"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled" type2="error"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text" type2="warning"/>
        <ml-button type="secondary" variation="left-icon-text" type2="warning"/>
        <ml-button type="secondary" variation="text-only" type2="warning"/>
        <ml-button type="secondary" variation="icon-only" type2="warning"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled" type2="warning"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text" type2="success"/>
        <ml-button type="secondary" variation="left-icon-text" type2="success"/>
        <ml-button type="secondary" variation="text-only" type2="success"/>
        <ml-button type="secondary" variation="icon-only" type2="success"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled" type2="success"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert :visible="true"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="info"  header="Header" :visible="true"/>
        <ml-alert type="error"  header="Header" :visible="true"/>
        <ml-alert type="warning"  header="Header" :visible="true"/>
        <ml-alert type="success"  header="Header" :visible="true"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="info" header="This is default" variation="all" :visible="true"/>
      </div>
      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="error" header="This is title only" variation="title-only" :visible="true"/>
      </div>
      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="warning" header="This is content only" variation="content-only" content="This is content only. Lorem ipsum dolor sit amet consectetur adipisicing elit" :visible="true"/>
      </div>
      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="success" header="This is title and content" variation="title-content" :visible="true"/>
      </div>
    </div>
  </div>

</template>

<script src="./app.ts" lang="ts"></script>
