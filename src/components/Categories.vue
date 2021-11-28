<template>
     <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
              Dropdown w/ Tooltip
            </v-btn>
          </template>
          <span>Im A ToolTip</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item v-for="(cat, index) in $createStore.state.categories" :key="index">
          <v-list-item-title>{{ cat.description }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
    export default{
        
    }

</script>