  async function sportData() {
    let url="https://app.sportdataapi.com/api/v1/soccer/matches?apikey=601a1530-d819-11ec-a444-dde88db6c3cd&season_id=1243&league_id=281&date_from=2021-02-17&date_to=2021-02-25";
      let promise = await fetch(url);
 
       let response = await promise.json();
      //let response = await sportData(
        console.log(response.data);
      
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        
      }
     let body=document.querySelector("body")
        body.innerHTML=`

        <section id="football">
        <div class="container">
            <div class="komando">
                <span id="name-1">
                ${response.home_team.short_code}
                </span>
                <img src="${response.home_team.logo}" alt="">
                <span id="xal">
                ${response.stats.ft_score}
                </span>
                <span id="img">
                <img src="${response.away_team.logo}" alt="">
              
                </span>
                <span id="name-2">${response.away_team.short_code}</span>
            </div>
        </div>
    </section>

        `
       }
    
   sportData()

    
  
  