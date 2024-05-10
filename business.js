  function showLicenses() {
    var businessType = document.getElementById("busitype").value;
    var businessStructure = document.getElementById("busistruct").value;
    var businessSize = document.getElementById("busisize").value;
    var licenseDetails = document.getElementById("licenseDetails");

    // Clear previous content
    licenseDetails.innerHTML = "";

    // Creating license details
    var licenses = document.createElement("div");
    licenses.classList.add("detail");
    var heading = document.createElement("h3");
    heading.textContent = "License Requirements";
    licenses.appendChild(heading);

    // Creating list of license requirements based on business type
    var list = document.createElement("ul");
    switch(businessType) {
      case "Retail shops":
        var retailLicenses = ["Trade License", "Shops and Establishment Registration"];
        for(var i = 0; i < retailLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = retailLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Restaurants":
        var restaurantLicenses = ["Food License", "Health License", "Fire Department NOC"];
        if (businessSize === "Small" || businessSize === "Medium" || businessSize === "Large") {
          restaurantLicenses.push("Liquor License");
        }
        for(var i = 0; i < restaurantLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = restaurantLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Hotels":
        var hotelLicenses = ["Trade License", "Health License", "Fire Department NOC", "Liquor License"];
        if (businessSize === "Small" || businessSize === "Medium" || businessSize === "Large") {
          hotelLicenses.push("Food License");
        }
        for(var i = 0; i < hotelLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = hotelLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Beauty salons":
        var salonLicenses = ["Trade License", "Health License"];
        for(var i = 0; i < salonLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = salonLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Manufacturing units":
        var manufacturingLicenses = ["Trade License", "Pollution Clearance"];
        for(var i = 0; i < manufacturingLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = manufacturingLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Warehouses":
        var warehouseLicenses = ["Trade License"];
        for(var i = 0; i < warehouseLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = warehouseLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Shopping malls":
        var mallLicenses = ["Trade License", "Fire Department NOC"];
        for(var i = 0; i < mallLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = mallLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Manufacturing plants":
        var plantLicenses = ["Trade License", "Pollution Clearance"];
        for(var i = 0; i < plantLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = plantLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Hospitals":
        var hospitalLicenses = ["Trade License", "Health License", "Fire Department NOC"];
        for(var i = 0; i < hospitalLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = hospitalLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Educational institutions":
        var eduLicenses = ["Trade License", "Education Department NOC"];
        for(var i = 0; i < eduLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = eduLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Entertainment venues":
        var entLicenses = ["Trade License", "Entertainment License", "Fire Department NOC"];
        for(var i = 0; i < entLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = entLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Clinics":
        var clinicLicenses = ["Trade License", "Health License"];
        for(var i = 0; i < clinicLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = clinicLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Pharmacies":
        var pharmacyLicenses = ["Trade License", "Health License"];
        for(var i = 0; i < pharmacyLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = pharmacyLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Food processing units":
        var foodLicenses = ["Trade License", "Food License", "Pollution Clearance"];
        for(var i = 0; i < foodLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = foodLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Childcare centers":
        var childcareLicenses = ["Trade License", "Health License", "Education Department NOC"];
        for(var i = 0; i < childcareLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = childcareLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Fitness centers":
        var fitnessLicenses = ["Trade License", "Health License"];
        for(var i = 0; i < fitnessLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = fitnessLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Petrol pump":
        var petrolLicenses = ["Trade License", "Petroleum and Explosives Safety Organization (PESO) License"];
        for(var i = 0; i < petrolLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = petrolLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Food manufacturing units":
        var foodManuLicenses = ["Trade License", "Food License", "Pollution Clearance"];
        for(var i = 0; i < foodManuLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = foodManuLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Catering services":
        var cateringLicenses = ["Trade License", "Food License"];
        for(var i = 0; i < cateringLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = cateringLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Food transportation businesses":
        var foodTransLicenses = ["Trade License", "Food License"];
        for(var i = 0; i < foodTransLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = foodTransLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Street food vendors":
        var streetFoodLicenses = ["Trade License", "Food License"];
        for(var i = 0; i < streetFoodLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = streetFoodLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Bars":
        var barLicenses = ["Trade License", "Liquor License"];
        for(var i = 0; i < barLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = barLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Liquor stores":
        var liquorLicenses = ["Trade License", "Liquor License"];
        for(var i = 0; i < liquorLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = liquorLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Clubs":
        var clubLicenses = ["Trade License", "Liquor License"];
        for(var i = 0; i < clubLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = clubLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Event organizers":
        var eventLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < eventLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = eventLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Logistics companies":
        var logisticsLicenses = ["Trade License", "Transport Permit"];
        for(var i = 0; i < logisticsLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = logisticsLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Trucking services":
        var truckingLicenses = ["Trade License", "Transport Permit"];
        for(var i = 0; i < truckingLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = truckingLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Bus operators":
        var busLicenses = ["Trade License", "Transport Permit"];
        for(var i = 0; i < busLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = busLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Taxi services":
        var taxiLicenses = ["Trade License", "Transport Permit"];
        for(var i = 0; i < taxiLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = taxiLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Tour operators":
        var tourLicenses = ["Trade License", "Tour Operator License"];
        for(var i = 0; i < tourLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = tourLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Vehicle rental businesses":
        var rentalLicenses = ["Trade License", "Transport Permit"];
        for(var i = 0; i < rentalLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = rentalLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Construction contractors":
        var constructionLicenses = ["Trade License", "Construction Permit"];
        for(var i = 0; i < constructionLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = constructionLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Real estate developers":
        var realEstateLicenses = ["Trade License", "Real Estate Development Permit"];
        for(var i = 0; i < realEstateLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = realEstateLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Civil engineering firms":
        var civilEngLicenses = ["Trade License", "Engineering Consultancy License"];
        for(var i = 0; i < civilEngLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = civilEngLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Architects":
        var architectLicenses = ["Trade License", "Architectural License"];
        for(var i = 0; i < architectLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = architectLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Renovation contractors":
        var renovationLicenses = ["Trade License", "Renovation Permit"];
        for(var i = 0; i < renovationLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = renovationLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Interior design firms":
        var interiorDesignLicenses = ["Trade License", "Interior Design License"];
        for(var i = 0; i < interiorDesignLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = interiorDesignLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Cinemas":
        var cinemaLicenses = ["Trade License", "Entertainment License", "Fire Department NOC"];
        for(var i = 0; i < cinemaLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = cinemaLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Amusement parks":
        var amusementLicenses = ["Trade License", "Entertainment License", "Fire Department NOC"];
        for(var i = 0; i < amusementLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = amusementLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Event management companies":
        var eventManagementLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < eventManagementLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = eventManagementLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Nightclubs":
        var nightclubLicenses = ["Trade License", "Liquor License", "Entertainment License"];
        for(var i = 0; i < nightclubLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = nightclubLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Festivals":
        var festivalLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < festivalLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = festivalLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Trade shows":
        var tradeShowLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < tradeShowLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = tradeShowLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Sporting events":
        var sportingLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < sportingLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = sportingLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Cultural events":
        var culturalLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < culturalLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = culturalLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Charity fundraisers":
        var charityLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < charityLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = charityLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Parades":
        var paradeLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < paradeLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = paradeLicenses[i];
          list.appendChild(listItem);
        }
        break;
      case "Public gatherings":
        var gatheringLicenses = ["Trade License", "Event Management License"];
        for(var i = 0; i < gatheringLicenses.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = gatheringLicenses[i];
          list.appendChild(listItem);
        }
        break;
    }

    // Appending list to license details
    licenses.appendChild(list);
    licenseDetails.appendChild(licenses);
    licenseDetails.appendChild()
  }

