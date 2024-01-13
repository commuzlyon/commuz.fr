<template>
    <title>La Commuz' - Commuz' 2024</title>
    <Meta name="description" content="La Commuz présente son spectacle de 2024." />
    <div>
        <pane id="info" :type="'pane--media-left'" :image="'/images/question-mark.png'" :text="item.text1">
        </pane>
    </div>
</template>

<script>

let data = {
    text1:
        "<h2>2024</h2>" +
        "<p align=justify > Stay tuned!</p>",
};

export default defineComponent({
    setup() {
        definePageMeta({
            name: "App",
            layout: 'default',
        });
    },
    data: function () {
        return {
            item: data,
        };
    }
});

</script>