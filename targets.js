places=[
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-zhangye-gettyimages-175323801-1505334995.jpg?crop=1xw:1xh;center,top&resize=980:*',
        location: "Geoparque Zhangye Danxia, ​​China",
        Cost: 5000000,
        tags: ['Geoparque Zhangye Danxia', 'travel', 'Asia', 'China']
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-venice-gettyimages-489741024-1505338894.jpg?crop=1xw:1xh;center,top&resize=980:*',
        location: "Venecia, Italia",
        Cost: 5000000,
        tags: ['Venice', 'Italy', 'Europe', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/banff-517747003-1494616292.jpg?crop=0.9997418022205009xw:1xh;center,top&resize=980:*',
        location: "Banff National Park, Canada",
        Cost: 5000000,
        tags: ['Banff National Park', 'America', 'Canada', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-128394846-1494616348.jpg?crop=1xw:1xh;center,top&resize=980:*',
        location: "Great Ocean Road, Australia",
        Cost: 5000000,
        tags: ['Great Ocean Road', 'Australia', 'Oceania', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-machu-ppichu-gettyimages-629556601-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*',
        location: "Machu Picchu, Perú",
        Cost: 5000000,
        tags: ['Machu Picchu', 'Perú', 'America', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-pamukkale-gettyimages-466129341-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*',
        location: "Pamukkale, Turkey",
        Cost: 5000000,
        tags: ['Pamukkale', 'Turkey', 'Asia', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/st-lucia-154917524-1494616323.jpg?crop=1xw:1xh;center,top&resize=980:*',
        location: "Pitons, St Lucia",
        Cost: 5000000,
        tags: ['Pitons', 'St Lucia', 'America', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/bora-bora-gettyimages-575766591.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
        location: "Bora Bora, French Polynesia",
        Cost: 5000000,
        tags: ['Bora Bora', 'French Polynesia', 'Oceania', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/1461265325-santorini-gettyimages-107741204.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
        location: "Oia, Santorini, Greece",
        Cost: 5000000,
        tags: ['Oia', 'Greece', 'Santorini','Europe', 'travel']
    },
    {
        image: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
        location: "Torres del Paine National Park, Chile",
        Cost: 5000000,
        tags: ['Torres del Paine National Park', 'Chile', 'America', 'travel']
    }

    ]

    for(place of places){

    price=place.Cost.toLocaleString('en-US').replaceAll(',','.');

    document.getElementById('cardContainer').innerHTML +=
    `<div class="card m-4" style="width: 17rem;">
    <img src="${place.image}" class="card-image mt-2" alt="">
    <div class="card-body d-flex flex-wrap justify-content-center">
        <h5 class="card-title">${place.location}</h5>
        <h3 class="my-3">$${price}</h3>
        <div class="d-flex flex-wrap mb-3 ">
          ${stringTags(place.tags)}
        </div>
          <a href="#" class="btn btn-lg btn-success align-self-center">Buy</a>
        </div>`
    }
    
    function stringTags(arrayTags){

      let finalText="";

      for(tag of arrayTags){
        
        finalText += `<a class="mx-2" href="?${tag}">#${tag}</a>`
      }
      return finalText
    }

/*for(let i = 1; i <= places.length; i++){
    let url = `https://rickandmortyapi.com/api/character/${i}`
    fetch(url).then(
  
      (response) => {
        console.log(response)
        return response.json()
      }
    
    ).then(
    
      (data) => {
        console.log(data)
        document.getElementById('charsContainer').innerHTML += `
        
        <div class="card" style="width: 18rem;">
          <img src="${data.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Genero: ${data.gender}</p>
            <p class="card-text">Ubicacion: ${data.location.name}</p>
            <p class="card-text">Estado: ${data.status}</p>
          </div>
        </div>
    
        `
      }
      
    ).catch(
      (error) => {
        console.log(error)
      }
    )
}*/