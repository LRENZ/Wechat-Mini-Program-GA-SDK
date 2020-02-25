

  import _default from './config';
  function checkObjList(obj){
    if( typeof obj !== 'object'){
      return "Error, this is not a object"
    }
    if(obj.hasOwnProperty('list')){
      return true
    }
      return false
  }


  function impressionListIndex(imp){

      let listMapping = new Map()
      let ls = []
      if(imp.every(checkObjList)){
      for (let x of imp){
        if(x.hasOwnProperty('list')){
          ls.push(x['list'])
        }
      }

      let lst = [...new Set(ls)]
      //console.log(lst)
      for (let [i,v] of lst.entries()){
        listMapping.set(v,i+1)
      }
        listMapping.set("type","every")
      return listMapping

      }

      if(imp.some(checkObjList)){

      for (let [i,x] of imp.entries()){
        if(x.hasOwnProperty('list')){
          ls.push(x['list'])
        }
        ls.push("_not_set_")
      }
      let lst = [...new Set(ls)]
      //console.log(lst)
      for (let [i,v] of lst.entries()){
        listMapping.set(v,i+1)
      }
      listMapping.set("type","some")
      //console.log(listMapping)
      return listMapping
      }

      if(ls.length == imp.length){
        listMapping.set('len',lst.length)
      }
      //console.log(ls)
      let lst = [...new Set(ls)]
      //console.log(lst)
      for (let [i,v] of lst.entries()){
        listMapping.set(v,i+1)
      }
      listMapping.set("type","none")
      return listMapping
    }


   function isEmptyObj(obj){
     if(Object.keys(obj).length === 0 && obj.constructor === Object){
      return true
     }
     return false

   }

  class EEC{
   constructor(){
     this.objectEntriesPolyfilll()
   }

   objectEntriesPolyfilll(){
     if (!Object.entries)
   Object.entries = function( obj ){
     var ownProps = Object.keys( obj ),
         i = ownProps.length,
         resArray = new Array(i); // preallocate the Array
     while (i--)
       resArray[i] = [ownProps[i], obj[ownProps[i]]];

     return resArray;
   };
   }

  impressions(obj,cd,cm){
      if(!obj.hasOwnProperty("impressions")) return {}
      if(!Array.isArray(obj.impressions)) throw new Error("impressions must be a object array");
      let pcd = {
        ..._default.productScopeCD,
        ...cd
      }

      let pcm = {
        ..._default.productScopeCM,
        ...cm
      }
      let product = {}
        let ilLen = impressionListIndex(obj.impressions).get("type")
        let ilMap = impressionListIndex(obj.impressions)
        ilMap.delete("type")
        //has list on the object
        if(ilLen == "every"){
          for (let [id,ls] of ilMap.entries() ){
            product[`il${ls}nm`]=id
          }

            for (let [i,v] of obj.impressions.entries()){

              let listIndex = ilMap.get(v.list) || i+1
              if(v.hasOwnProperty('name')){
                product[`il${listIndex}pi${i+1}nm`] = v['name']
              }

              if(v.hasOwnProperty('id')){
                product[`il${listIndex}pi${i+1}id`] = v['id']
              }

              if(v.hasOwnProperty('category')){
                product[`il${listIndex}pi${i+1}ca`] = v['category']
              }

              if(v.hasOwnProperty('brand')){
                product[`il${listIndex}pi${i+1}br`] = v['brand']
              }

              if(v.hasOwnProperty('category')){
                product[`il${listIndex}pi${i+1}ca`] = v['category']
              }

              if(v.hasOwnProperty('variant')){
                product[`il${listIndex}pi${i+1}va`] = v['variant']
              }

              if(v.hasOwnProperty('price')){
                product[`il${listIndex}pi${i+1}pr`] = v['price']
              }

              if(v.hasOwnProperty('position')){
                product[`il${listIndex}pi${i+1}ps`] = v['position']
              }
              if(!isEmptyObj(pcd)){
                for(let k in pcd){
                  if(!!k && pcd[k] ){
                    product[`il${listIndex}pi${i+1}cd${k}`] = pcd[k]
                  }
                }
              }

              if(!isEmptyObj(pcm)){
                for(let k in pcm){
                  if(!!k && pcm[k] ){
                    product[`il${listIndex}pi${i+1}cm${k}`] = pcm[k]
                  }
                }
              }
            }

            return product

        }else if(ilLen == "some"){
          for (let [id,ls] of ilMap.entries() ){
            if(typeof id == "string"){
              product[`il${ls}nm`]=id
            }

            for (let [i,v] of obj.impressions.entries()){
              let listIndex = ilMap.get(v.list) || ilMap.get("_not_set_")
              if(v.hasOwnProperty('name')){
                product[`il${listIndex}pi${i+1}nm`] = v['name']
              }

              if(v.hasOwnProperty('id')){
                product[`il${listIndex}pi${i+1}id`] = v['id']
              }

              if(v.hasOwnProperty('category')){
                product[`il${listIndex}pi${i+1}ca`] = v['category']
              }

              if(v.hasOwnProperty('brand')){
                product[`il${listIndex}pi${i+1}br`] = v['brand']
              }

              if(v.hasOwnProperty('category')){
                product[`il${listIndex}pi${i+1}ca`] = v['category']
              }

              if(v.hasOwnProperty('variant')){
                product[`il${listIndex}pi${i+1}va`] = v['variant']
              }

              if(v.hasOwnProperty('price')){
                product[`il${listIndex}pi${i+1}pr`] = v['price']
              }

              if(v.hasOwnProperty('position')){
                product[`il${listIndex}pi${i+1}ps`] = v['position']
              }

              if(!isEmptyObj(pcd)){
                for(let k in pcd){
                  if(!!k && pcd[k] ){
                    product[`il${listIndex}pi${i+1}cd${k}`] = pcd[k]
                  }
                }
              }

              if(!isEmptyObj(pcm)){
                for(let k in pcm){
                  if(!!k && pcm[k] ){
                    product[`il${listIndex}pi${i+1}cm${k}`] = pcm[k]
                  }
                }
              }
            }


            }

        //console.log(product)
        return product
      }else{
          // no list on the object
          for (let [i,v] of obj.impressions.entries()){
          let listIndex =  1
          if(v.hasOwnProperty('name')){
            product[`il${listIndex}pi${i+1}nm`] = v['name']
          }

          if(v.hasOwnProperty('id')){
            product[`il${listIndex}pi${i+1}id`] = v['id']
          }

          if(v.hasOwnProperty('category')){
            product[`il${listIndex}pi${i+1}ca`] = v['category']
          }

          if(v.hasOwnProperty('brand')){
            product[`il${listIndex}pi${i+1}br`] = v['brand']
          }

          if(v.hasOwnProperty('category')){
            product[`il${listIndex}pi${i+1}ca`] = v['category']
          }

          if(v.hasOwnProperty('variant')){
            product[`il${listIndex}pi${i+1}va`] = v['variant']
          }

          if(v.hasOwnProperty('price')){
            product[`il${listIndex}pi${i+1}pr`] = v['price']
          }

          if(v.hasOwnProperty('position')){
            product[`il${listIndex}pi${i+1}ps`] = v['position']
          }

          if(!isEmptyObj(pcd)){
            for(let k in pcd){
              if(!!k && pcd[k] ){
                product[`il${listIndex}pi${i+1}cd${k}`] = pcd[k]
              }
            }
          }

          if(!isEmptyObj(pcm)){
            for(let k in pcm){
              if(!!k && pcm[k] ){
                product[`il${listIndex}pi${i+1}cm${k}`] = pcm[k]
              }
            }
          }
        }
        }

         return product

    }

    /*var t = {
      "promotions": [{
  "id": "bts",
  "name": "Back To School",
  "creative": "HOME banner",
  "position": "right sidebar"
}]
}*/

  promotions(obj){

      if(!obj.hasOwnProperty("promotions") ) return {};
      if(!Array.isArray(obj.promotions)) throw new Error("promotion must be a object array");

      let product= {}
      ///if(obj.promotions.hasOwnProperty('action')){
      //  product['promoa'] = obj.promotions.action
      //}


      for (let [i,v] of obj.promotions.entries()){
        if(v.hasOwnProperty("id")){
          product[`promo${i+1}id`] = v['id']
        }

        if(v.hasOwnProperty("name")){
          product[`promo${i+1}nm`] = v['name']
        }

        if(v.hasOwnProperty("creative")){
          product[`promo${i+1}cr`] = v['creative']
        }

        if(v.hasOwnProperty("position")){
          product[`promo${i+1}ps`] = v['position']
        }

      }
      return product


    }

    /*promotions(t)

    var t = {"products": [{
        "id": "bc823",
        "name": "Fuelworks T-Shirt",
        "price": "92.00",
        "brand": "Fuelworks",
        "category": "T-Shirts",
        "position": "4"
      }]
    }*/

    products(obj,cd,cm){
      if(!obj.hasOwnProperty("products") ) return {};
    if(!Array.isArray(obj.products)) throw new Error("products must be a object array");
    let pcd = {
      ..._default.productScopeCD,
      ...cd
    }

    let pcm = {
      ..._default.productScopeCM,
      ...cm
    }
    let product = {}
    for(let[i,v] of obj.products.entries()){
      if(v.hasOwnProperty('id')){
        product[`pr${i+1}id`] = v['id']
      }

      if(v.hasOwnProperty('name')){
        product[`pr${i+1}nm`] = v['name']
      }

      if(v.hasOwnProperty('brand')){
        product[`pr${i+1}br`] = v['brand']
      }

      if(v.hasOwnProperty('price')){
        product[`pr${i+1}pr`] = v['price']
      }

      if(v.hasOwnProperty('category')){
        product[`pr${i+1}ca`] = v['category']
      }

      if(v.hasOwnProperty('variant')){
        product[`pr${i+1}va`] = v['variant']
      }

      if(v.hasOwnProperty('quantity')){
        product[`pr${i+1}qt`] = v['quantity']
      }

      if(v.hasOwnProperty('coupon')){
        product[`pr${i+1}cc`] = v['coupon']
      }

      if(v.hasOwnProperty('position')){
        product[`pr${i+1}ps`] = v['position']
      }

      if(!isEmptyObj(pcd)){
        for(let k in pcd){
          if(!!k && pcd[k] ){
            product[`pr${i+1}cd${k}`] = pcd[k]
          }
        }
      }

      if(!isEmptyObj(pcm)){
        for(let k in pcm){
          if(!!k && pcm[k] ){
            product[`pr${i+1}cm${k}`] = pcm[k]
          }
        }
      }

    }
    return product


    }


    checkEEC(obj,cd,cm){

      if(obj.hasOwnProperty("impressions")){
        var imp = this.impressions(obj,cd,cm)
      }


      if(obj.hasOwnProperty("promotions")){
        var promo = this.promotions(obj,cd,cm)
      }

      if(obj.hasOwnProperty("products")){
        var  prod = this.products(obj,cd,cm)
      }

      let eecObj = {
        ...imp,
        ...promo,
        ...prod
      }
      return eecObj
    }

}

const eec = new EEC()
export default eec
