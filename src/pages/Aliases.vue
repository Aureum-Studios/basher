<template>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <card type="tasks" :header-classes="'text-left'" :footerClasses="'text-right'">
        <template slot="header">
          <h6 class="title d-inline">{{$t('bashPrompt.aliases', {count: aliases.length})}}</h6>
          <base-dropdown menu-on-right=""
                         tag="div"
                         title-classes="btn btn-link btn-icon"
                         aria-label="Settings menu"
                         :class="'float-right'">
            <i slot="title" class="tim-icons icon-settings-gear-63"></i>
            <a class="dropdown-item" href="#pablo">{{$t('bashPrompt.dropdown.action')}}</a>
            <a class="dropdown-item" href="#pablo">{{$t('bashPrompt.dropdown.anotherAction')}}</a>
            <a class="dropdown-item" href="#pablo">{{$t('bashPrompt.dropdown.somethingElse')}}</a>
          </base-dropdown>
        </template>
        <div class="table-full-width table-responsive">
          <alias-list :aliases="aliases"></alias-list>
        </div>
        <base-button round @click="addAlias" icon type="success">
          <i style="color: black" class="tim-icons icon-simple-add"></i>
        </base-button>
      </card>
    </div>
    <div class="col-lg-6 col-md-12">
      <card type="nav-tabs">
        <div slot="header" class="card-header-success">
          Quote
        </div>
        <blockquote class="blockquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </card>
    </div>
  </div>
</template>
<script>
  import AliasList from '../components/Aliases/AliasList.vue';

  export default {
    components: {
      AliasList
    },
    props: {
      aliases: {
        type: Array,
        default: function () {
          return ["Alias"]
        }
      }
    },
    data() {
      return {
        aliasListKey: 0,
      };
    },
    methods: {
      addAlias() {
        this.aliases.push("Another Alias");
        this.forceRerender();
      },
      forceRerender() {
        this.aliasListKey += 1;
      }
    }
  };
</script>
<style>
</style>
