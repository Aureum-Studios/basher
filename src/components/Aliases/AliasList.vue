<template>
  <base-table :data="aliases"
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
        <base-button type="link" @click="removeAlias" aria-label="remove button">
          <i class="tim-icons icon-simple-remove"></i>
        </base-button>
      </td>
    </template>
  </base-table>
</template>
<script>
  import {BaseTable} from '@/components'

  export default {
    name: 'alias-list',
    props: {
      aliases: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    components: {
      BaseTable
    },
    methods: {
      removeAlias() {
        this.aliases.pop();
      }
    }
  }
</script>
<style>
</style>
