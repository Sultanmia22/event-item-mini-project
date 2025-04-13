const selectorValue = document.querySelector('#SelectProducts')
const itemInfo = document.querySelector('#productInfo')

const device = {
    Xiaomi_Poco_C71:{
        Brand: 'Xiaomi', 
        model:'Xiaomi Poco C71',
        Category: 'Smartphones',
        Display:'88" 720x1640 pixels',
        Camera :'32MP 1080p',
        RAM:'4/6GB RAM Unisoc T7250',
        Battery:'5200mAh 15W',
        img: 'img/Xiaomi-Poco-C71-Desert-Gold.webp'
    },

    Xiaomi_Redmi_Note_14S:{
        Brand: 'Xiaomi',
     model:'Xiaomi Redmi Note 14S',
     Category: 'Smartphones',
     Display:'6.67" 1080x2400 pixels',
     Camera :'200MP 1080p',
     RAM:'8GB RAM Helio G99 Ultra',
     Battery:'5000mAh 67W',
     img: 'img/Xiaomi-Redmi-Note-14S-Ocean-Blue.webp'
 }
    
}

selectorValue.addEventListener('change',function(){
    const collectedvalue = this.value

    if(collectedvalue==='Xiaomi Poco C71'){
        const product = device.Xiaomi_Poco_C71
        itemInfo.innerHTML = `
       <img src="${product.img}" alt="${product.model}" class="product-img">
    <table class="p-table">
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>Brand</td><td>${product.Brand}</td></tr>
        <tr><td>Model</td><td>${product.model}</td></tr>
        <tr><td>Category</td><td>${product.Category}</td></tr>
        <tr><td>Display</td><td>${product.Display}</td></tr>
        <tr><td>Battery</td><td>${product.Battery}</td></tr>
        <tr><td>RAM</td><td>${product.RAM}</td></tr>
        <tr><td>Camera</td><td>${product.Camera}</td></tr>
    </table>
`;
    }

    else if(collectedvalue==='Xiaomi Redmi Note 14S'){
        const product = device.Xiaomi_Redmi_Note_14S
        itemInfo.innerHTML = `
       <img src="${product.img}" alt="${product.model}" class="product-img">
    <table class="p-table">
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>Brand</td><td>${product.Brand}</td></tr>
        <tr><td>Model</td><td>${product.model}</td></tr>
        <tr><td>Category</td><td>${product.Category}</td></tr>
        <tr><td>Display</td><td>${product.Display}</td></tr>
        <tr><td>Battery</td><td>${product.Battery}</td></tr>
        <tr><td>RAM</td><td>${product.RAM}</td></tr>
        <tr><td>Camera</td><td>${product.Camera}</td></tr>
    </table>
`;
    }

})

