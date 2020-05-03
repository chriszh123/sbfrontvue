<template>
    <div>
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="dashed">dashed</Button>
        <Button type="text">text</Button>
        <br><br>
        <Button type="info">info</Button>
        <Button type="success">success</Button>
        <Button type="warning">warning</Button>
        <Button type="error">error</Button>

        <br><br>
        <span>幽灵按钮:将其他按钮的内容反色，背景变为透明，常用在有色背景上</span>
        <br>

        <Button type="default" ghost>Default</Button>
        <Button type="primary" ghost>Primary</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="text" ghost>Text</Button>
        <Button type="info" ghost>Info</Button>
        <Button type="success" ghost>Success</Button>
        <Button type="warning" ghost>Warning</Button>
        <Button type="error" ghost>Error</Button>

        <br><br>
        <span>图标按钮及按钮形状</span>
        <br>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <Button type="primary" icon="ios-search">Search-1</Button>
        <Button type="primary" shape="circle" icon="ios-search">Search-2</Button>
        <Button type="primary" shape="circle">Circle</Button>
        <br><br>
        <Button shape="circle" icon="ios-search"></Button>
        <Button icon="ios-search">Search-3</Button>
        <Button shape="circle" icon="ios-search">Search-4</Button>
        <Button shape="circle">Circle-2</Button>


        <br><br>
        <span>按钮尺寸</span>
        <br>
        <RadioGroup v-model="buttonSzie" type='button'>
            <Radio label="large">Large</Radio>
            <Radio label="default">Default</Radio>
            <Radio label="small">Small</Radio>
        </RadioGroup>
        <br><br>
        <Button :size="buttonSize" type="primary">Primary-1</Button>
        <Button :size="buttonSize" type="default">Default</Button>
        <Button :size="buttonSize" type="dashed">Dashed</Button>
        <Button :size="buttonSize" type="text">Text</Button>
        <br><br>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
        <br><br>
        <ButtonGroup :size="buttonSize">
            <Button :size="buttonSize" type="primary">
                <Icon type="ios-arrow-back" />
                Backward
            </Button>
            <Button :size="buttonSize" type="primary">
                Forward
                <Icon type="ios-arrow-forward" />
            </Button>
        </ButtonGroup>

        <br><br>
        <span>长按钮:long 可将按钮宽度设置为 100%</span>
        <br>
        <Button type="success" long>SUBMIT</Button>
        <br><br>
        <Button type="error" long>DELETE</Button>

        <br><br>
        <span>不可用状态</span>
        <br>
        <Button>Default</Button>
        <Button disabled>Default(Disabled)</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(Disabled)</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(Disabled)</Button>
        <Button type="text">Text</Button>
        <Button type="text" disabled>Text(Disabled)</Button>

        <br><br>
        <span>加载中状态</span>
        <br>
        <Button type="primary" loading>Loading...</Button>
        <Button type="primary" :loading="loading" @click="toLoading();">
            <span v-if="!loading2">Click me!</span>
            <span v-else>Loading</span>
        </Button>
        <Button loading shape="circle"></Button>
        <Button loading shape="circle" type="primary"></Button>


        <br><br>
        <span>Basic</span>
        <br>
        <ButtonGroup>
            <Button>Cancel</Button>
            <Button type="primary">Confirm</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button disabled>Yesterday</Button>
            <Button disabled>Today</Button>
            <Button disabled>Tomorrow</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button>M</Button>
            <Button type="dashed">R</Button>
        </ButtonGroup>
        <br><br>
        <h4>Icons</h4>
        <ButtonGroup>
            <Button type="primary">
                <Icon type="ios-arrow-back"></Icon>
                Backward
            </Button>
            <Button type="primary">
                Forward
                <Icon type="ios-arrow-forward"></Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="primary" icon="ios-skip-backward"></Button>
            <Button type="primary" icon="ios-skip-forward"></Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button icon="ios-color-wand-outline"></Button>
            <Button icon="ios-sunny-outline"></Button>
            <Button icon="ios-crop"></Button>
            <Button icon="ios-color-filter-outline"></Button>
        </ButtonGroup>
        <br><br>
        <h4>Circle</h4>
        <ButtonGroup shape="circle">
            <Button type="primary">
                <Icon type="ios-arrow-back"></Icon>
                Backward
            </Button>
            <Button type="primary">
                Forward
                <Icon type="ios-arrow-forward"></Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button type="primary" icon="ios-skip-backward"></Button>
            <Button type="primary" icon="ios-skip-forward"></Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button icon="ios-color-wand-outline"></Button>
            <Button icon="ios-sunny-outline"></Button>
            <Button icon="ios-crop"></Button>
            <Button icon="ios-color-filter-outline"></Button>
        </ButtonGroup>
        <br><br>
        <h4>Size</h4>
        <ButtonGroup size="large">
            <Button>Large</Button>
            <Button>Large</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button>Default</Button>
            <Button>Default</Button>
        </ButtonGroup>
        <ButtonGroup size="small">
            <Button>Small</Button>
            <Button>Small</Button>
        </ButtonGroup>
        <br><br>
        <ButtonGroup size="large" shape="circle">
            <Button>Large</Button>
            <Button>Large</Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button>Default</Button>
            <Button>Default</Button>
        </ButtonGroup>
        <ButtonGroup size="small" shape="circle">
            <Button>Small</Button>
            <Button>Small</Button>
        </ButtonGroup>


        <br><br>
        <span>按钮组纵向排列</span>
        <br>
        <ButtonGroup vertical>
            <Button icon="logo-facebook"></Button>
            <Button icon="logo-twitter"></Button>
            <Button icon="logo-googleplus"></Button>
            <Button icon="logo-tumblr"></Button>
        </ButtonGroup>

        <br><br>
        <span>跳转:通过设置 to 可以实现点击按钮直接跳转，支持传入 vue-router 对象; 设置 replace 则不会保存历史记录; 设置 target，会跟 a 标签一样的行为</span>
        <br>
        <Button to="/components/icon-en">Normal</Button>
        <Button to="/components/icon-en" replace>No history</Button>
        <Button to="//iviewui.com" target="_blank">New window</Button>


        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            buttonSize:'large',
            loading: false,
            loading2: false
        }
    }, 
    methods: {
        toLoading: function() {
            this.loading = true;
        },
        toLoading2: function() {
            this.loading2 = true;
        }
    }
}
</script>

<style scoped>

</style>