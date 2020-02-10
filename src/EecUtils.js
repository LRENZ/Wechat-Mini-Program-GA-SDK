var t = {impresstion: [{
      "id": "9bdd2",
      "name": "Compton T-Shirt",
      "price": "44.00",
      "brand": "Compton",
      "category": "T-Shirts",
      "position": 0, 'list':"test"
      "dimension1":"test"
    },
    {
      "id": "6c3b0",
      "name": "Zappix T-Shirt",
      "price": "99.00",
      "brand": "Zappix",
      "category": "T-Shirts",
      "position": 3,
      'list':"leave"
    },
    {
      "id": "6c3b0",
      "name": "Zappix T-Shirt",
      "price": "99.00",
      "brand": "Zappix",
      "category": "T-Shirts",
      "position": 3,'list':'homepage'
    },

    {
      "id": "6c3b0",
      "name": "Zappix T-Shirt",
      "price": "99.00",
      "brand": "Zappix",
      "category": "T-Shirts",
      "position": 3,'list':'test'
    }
  ]}


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
        console.log(lst)
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
        console.log(lst)
        for (let [i,v] of lst.entries()){
          listMapping.set(v,i+1)
        }
        listMapping.set("type","some")
        console.log(listMapping)
        return listMapping
        }

        if(ls.length == imp.length){
          listMapping.set('len',lst.length)
        }
        console.log(ls)
        let lst = [...new Set(ls)]
        console.log(lst)
        for (let [i,v] of lst.entries()){
          listMapping.set(v,i+1)
        }
        listMapping.set("type","none")
        return listMapping
      }



  function  objectArrayToParams(obj){
      if(!obj.hasOwnProperty("impresstion")) return {}
      if(!Array.isArray(obj.impresstion)) throw new Error("impresstion must be a object array");

      let product = {}
        let ilLen = impressionListIndex(obj.impresstion).get("type")
        let ilMap = impressionListIndex(obj.impresstion)
        ilMap.delete("type")
        //has list on the object
        if(ilLen == "every"){
          for (let [id,ls] of ilMap.entries() ){
            product[`il${ls}nm`]=id
          }

            for (let [i,v] of obj.impresstion.entries()){
              let listIndex = ilMap.get(v.list) || i+1
              if(v.hasOwnProperty('name')){
                product[`il${listIndex}pi${i+1}nm`] = v['name']
              }

              if(v.hasOwnProperty('id')){
                product[`il${listIndex}pi${i+1}id`] = v['id']
              }

              if(v.hasOwnProperty('category')){
                product[`il${listIndex}pi${i+1}nm`] = v['category']
              }
            }

            return product

        }else if(ilLen == "some"){
          for (let [id,ls] of ilMap.entries() ){
            if(typeof id == "string"){
              product[`il${ls}nm`]=id
            }

            for (let [i,v] of obj.impresstion.entries()){
              let listIndex = ilMap.get(v.list) || ilMap.get("_not_set_")
              if(v.hasOwnProperty('name')){
                product[`il${listIndex}pi${i+1}nm`] = v['name']
              }

              if(v.hasOwnProperty('id')){
                product[`il${listIndex}pi${i+1}id`] = v['id']
              }

              if(v.hasOwnProperty('category')){
                product[`il${listIndex}pi${i+1}nm`] = v['category']
              }
            }

        }
        console.log(product)
        return product
      }else{
          // no list on the object
          for (let [i,v] of obj.impresstion.entries()){
          let listIndex =  1
          if(v.hasOwnProperty('name')){
            product[`il${listIndex}pi${i+1}nm`] = v['name']
          }

          if(v.hasOwnProperty('id')){
            product[`il${listIndex}pi${i+1}id`] = v['id']
          }

          if(v.hasOwnProperty('category')){
            product[`il${listIndex}pi${i+1}nm`] = v['category']
          }
        }
        }

         return product

    }

    function promotion(){

    }

    function product(){

    }





objectArrayToParams(t)
