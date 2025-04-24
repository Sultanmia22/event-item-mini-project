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

    if(collectedvalue==='Xiaomi Poco C7'){
        updateProductInfo(device.Xiaomi_Poco_C71)
        itemInfo.style.display = 'block';
    }

    else if(collectedvalue==='Xiaomi Redmi Note 14S'){
        updateProductInfo(device. Xiaomi_Redmi_Note_14S)
        itemInfo.style.display = 'block';
    }
});


function updateProductInfo(product){
    document.querySelector('#productImage').src = product.img
    document.querySelector('#productImage').alt = product.model;


    //! details

    document.querySelector('#productBrand').textContent = product.Brand
    document.querySelector('#productModel').textContent = product.model
    document.querySelector('#productCategory').textContent = product.Category
    document.querySelector('#productDisplay').textContent = product.Display
    document.querySelector('#productBattery').textContent = product.Battery
    document.querySelector('#productRAM').textContent = product.RAM
    document.querySelector('#productCamera').textContent = product.Camera

}

