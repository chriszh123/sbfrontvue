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
        <span>幽灵按钮:将其他按钮的内容反色，背景变为透明，常用在有色背景上:</span>
        <br><br>

        <Button type="default" ghost>Default</Button>
        <Button type="primary" ghost>Primary</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="text" ghost>Text</Button>
        <Button type="info" ghost>Info</Button>
        <Button type="success" ghost>Success</Button>
        <Button type="warning" ghost>Warning</Button>
        <Button type="error" ghost>Error</Button>

        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>