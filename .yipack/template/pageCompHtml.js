module.exports = `<template>
    <div class="comp-<%= page.kebabCaseName %>_<%= comp.kebabCaseName %>">
        page-<%= page.kebabCaseName %>_comp-<%= comp.kebabCaseName %>
    </div>
</template>

<script>
export default {
    name: "<%= comp.startCaseName %>",
    data(){
        return {

        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
};
</script>

<style lang="scss" scoped>
// 作用域样式，不影响下级元素
.comp-<%= page.kebabCaseName %>_<%= comp.kebabCaseName %> {
}
</style>
`;
