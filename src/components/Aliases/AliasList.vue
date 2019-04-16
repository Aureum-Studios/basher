<template>
  <base-table :data="tableData"
              thead-classes="text-primary">
    <template slot-scope="{row}">
      <td>
        <base-input class="mb-0" addon-left-icon="tim-icons icon-notes" placeholder="Alias name">
        </base-input>
      </td>
      <td>
        <base-input addon-left-icon="tim-icons icon-laptop" placeholder="Command">
        </base-input>
      </td>
      <td class="td-actions text-right">
        <base-button type="link" aria-label="remove button">
          <!-- TODO: Remove hard coded hex value -->
          <!-- TODO: Add hover logic -->
          <i style="color: var(--danger)" class="tim-icons icon-simple-remove"></i>
        </base-button>
      </td>
    </template>
  </base-table>
</template>
<script>
  import {BaseTable} from '@/components'

  export default {
    name: 'alias-list',
    components: {
      BaseTable
    },
    //TODO: Return alias name and such using $t
    computed: {
      tableData() {
        return this.$t('bashPrompt.taskList');
      }
    }
  }
</script>
<style>
</style>
