<template>
  <div class="FilterSearch-main">
        <van-index-bar :index-list="indexList">
            <van-index-anchor index="1">标题1</van-index-anchor>
          
            <van-cell value="内容" >
                <template #title>
                    <span class="custom-title">单元格</span>
                    <!-- <van-tag type="danger">标签</van-tag> -->
                </template>
                <div>ewwww</div>
            </van-cell>


            <van-index-anchor index="2">标题2</van-index-anchor>
            
            <van-checkbox-group v-model="result"  ref="checkboxGroup">
                <van-cell-group>
                    <van-cell
                    v-for="(item, index) in list"
                    clickable
                    :key="item"
                    :title="`复选框 ${item}`"
                    @click="toggle(index)"
                    >
                    <template #right-icon>
                        <van-checkbox :name="item" ref="checkboxes" />
                    </template>
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>

            
            <van-index-anchor index="3">标题3</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />


            <van-index-anchor index="4">标题4</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            
            <van-index-anchor index="5">标题5</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            
        </van-index-bar>
        <div @click="checkAll" style="height:20px;">全选</div>
  </div>
</template>

<script>
import { IndexBar, IndexAnchor, Cell, CellGroup,Checkbox, CheckboxGroup } from "vant"
export default {
    components:{
        [Cell.name]:Cell,
        [IndexBar.name]:IndexBar,
        [IndexAnchor.name]:IndexAnchor,
        [CellGroup.name]:CellGroup,
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup
    },
    data(){
        return {
             list: ['a', 'b'],
            result: [],
            indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },
    methods:{
         toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        checkAll(){
            this.$refs.checkboxGroup.toggleAll(true);
        }
    }
}
</script>

<style>

</style>