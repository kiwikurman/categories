var colors = { 
        "aliexpress": "DeepSkyBlue", 
        "beauty": "DarkTurquoise", 
        "bit": "LightGray", 
        "car.gas": "RosyBrown", 
        "car.service": "RosyBrown", 
        "car.wash": "RosyBrown", 
        "car.alternative": "RosyBrown", 
        "cash": "CadetBlue", 
        "clothes": "Coral", 
        "groceries": "Aqua", 
        "groceries.alonit": "Aqua", 
        "home.arnona": "DarkSalmon", 
        "home.improvement": "DarkSalmon", 
        "home.electric": "DarkSalmon", 
        "home.internet": "DarkSalmon", 
        "kiwi": "Coral",
        "office.irs": "GreenYellow", 
        "office.vat": "GreenYellow", 
        "other": "AliceBlue", 
        "parking": "AliceBlue", 
        "pharm": "HotPink", 
        "recreation.books": "SandyBrown", 
        "recreation.coffee": "Plum", 
        "recreation.hoog": "Plum",
        "recreation.kids.crafts": "SandyBrown", 
        "recreation.kids.games": "SandyBrown", 
        "recreation.other": "LightCoral", 
        "recreation.tv": "LightCoral", 
        "restaurants": "Orchid", 
        "restaurants.takeout": "Orchid", 
        "rout6": "OldLace",
	"vacation": "Aqua" 
} 
  
var categorized_labels = {
	"values": [{
		"label": "סופר פארם פקר כ\"ס 15",
		"category": "pharm"
	}, {
		"label": "רשת משחקיות פעלטון ב",
		"category": "recreation.kids.crafts"
	}, {
		"label": "אלונית מושב נוה ירק-",
		"category": "groceries.alonit"
	}, {
		"label": "תינוקי",
		"category": "recreation.kids.games"
	}, {
		"label": "קפה ברוריה בר קפה",
		"category": "recreation.coffee"
	}, {
		"label": "מקס סטוק כפר סבא",
		"category": "home.improvement"
	}, {
		"label": "T.REX",
		"category": "recreation.kids.games"
	}, {
		"label": "הפנינג קניון מרגליות",
		"category": "recreation.kids.games"
	}, {
		"label": "דומינו'ס פיצה",
		"category": "restaurants.takeout"
	}, {
		"label": "לחם ארטיזן הוד  השרו",
		"category": "groceries"
	}, {
		"label": "BIGA כפר סבא הירוקה",
		"category": "recreation.coffee"
	}, {
		"label": "קפה גרג קניון מרגלית",
		"category": "recreation.coffee"
	}, {
		"label": "העברה ב BIT בנה\"פ",
		"category": "bit"
	}, {
		"label": "חניון בית רובינשטיין",
		"category": "parking"
	}, {
		"label": "יוליה נמל תל-אביב בע",
		"category": "restaurants"
	}, {
		"label": "אילנס אוטרייב",
		"category": "recreation.coffee"
	}, {
		"label": "פקק קפה האסקי",
		"category": "recreation.coffee"
	}, {
		"label": "משק רוזנטל",
		"category": "groceries"
	}, {
		"label": "חניון נמל תל אביב",
		"category": "parking"
	}, {
		"label": "קפה קפה רננים",
		"category": "recreation.coffee"
	}, {
		"label": "בוקריה",
		"category": "restaurants"
	}, {
		"label": "חניון יכין",
		"category": "parking"
	}, {
		"label": "סופר אלונית -נווה יר",
		"category": "groceries.alonit"
	}, {
		"label": "וניליה הוד השרון",
		"category": "recreation.coffee"
	}, {
		"label": "מנגו גינדי ת\"א",
		"category": "clothes"
	}, {
		"label": "ק.ד עבוד קים ביוטי ס",
		"category": "beauty"
	}, {
		"label": "פלוס לגננת",
		"category": "recreation.kids.crafts"
	}, {
		"label": "ניופארם שרונים",
		"category": "pharm"
	}, {
		"label": "קאב קם בע\"מ",
		"category": "restaurants"
	}, {
		"label": "מס הכנסה עצמאים וחבר",
		"category": "office.irs"
	}, {
		"label": "גביית מע\"מ אינטרנט -",
		"category": "office.vat"
	}, {
		"label": "ביי-מי שוברי מתנה",
		"category": "recreation.kids.games"
	}, {
		"label": "זארה כפר סבא",
		"category": "clothes"
	}, {
		"label": "ארקפה ג'י",
		"category": "recreation.coffee"
	}, {
		"label": "מאצ' ריטייל בע\"מ HאM",
		"category": "clothes"
	}, {
		"label": "דור אלון - נווה ירק-",
		"category": "car.gas"
	}, {
		"label": "קפה לנדוור אושירה כ\"",
		"category": "recreation.coffee"
	}, {
		"label": "סטימצקי עזריאלי הוד",
		"category": "recreation.books"
	}, {
		"label": "לילי ותום",
		"category": "clothes"
	}, {
		"label": "סינטה בר בע\"מ",
		"category": "restaurants"
	}, {
		"label": "ארומה ק. מרגלית  השר",
		"category": "recreation.coffee"
	}, {
		"label": "ארומה כפר סבא",
		"category": "recreation.coffee"
	}, {
		"label": "סופר פארם הוד השרון",
		"category": "pharm"
	}, {
		"label": "פלוס לגננת בע\"מ",
		"category": "recreation.kids.crafts"
	}, {
		"label": "באליגם",
		"category": "other"
	}, {
		"label": "ZOZOBRA-גמא",
		"category": "restaurants"
	}, {
		"label": "כל בו חצי חינם הוד ה",
		"category": "groceries"
	}, {
		"label": "החומוס של ג'ינג'י",
		"category": "restaurants"
	}, {
		"label": "מסעדת שגב אקספרס",
		"category": "restaurants"
	}, {
		"label": "דרום השרון גבייה",
		"category": "home.arnona"
	}, {
		"label": "סוזט",
		"category": "restaurants"
	}, {
		"label": "אלונית נוה ירק",
		"category": "groceries.alonit"
	}, {
		"label": "אלונית מושב נווה ירק",
		"category": "groceries.alonit"
	}, {
		"label": "ארומה רמת החייל",
		"category": "recreation.coffee"
	}, {
		"label": "רמי לוי אינטרנט",
		"category": "groceries"
	}, {
		"label": "מסעדת NONO",
		"category": "restaurants"
	}, {
		"label": "בית תאילנדי בע\"מ",
		"category": "restaurants"
	}, {
		"label": "דור אלון מושב נוה ירק",
		"category": "car.gas"
	}, {
		"label": "אגנס בר",
		"category": "restaurants"
	}, {
		"label": "מרכז שירות לרכב גיל",
		"category": "car.service"
	}, {
		"label": "ארקפה רמת החייל",
		"category": "recreation.coffee"
	}, {
		"label": "קסטרו",
		"category": "clothes"
	}, {
		"label": "לחמים מאפייה ואספרסו בר",
		"category": "recreation.coffee"
	}, {
		"label": "CATIMINI",
		"category": "clothes"
	}, {
		"label": "כלבו חצי חינם הוד השרון",
		"category": "groceries"
	}, {
		"label": "שוק חצי חינם",
		"category": "groceries"
	}, {
		"label": "A TO Z LOFT-צמרת",
		"category": "beauty"
	}, {
		"label": "טפאו",
		"category": "restaurants"
	}, {
		"label": "קניון העיר תל אביב",
		"category": "parking"
	}, {
		"label": "משקאות הטורקי",
		"category": "groceries"
	}, {
		"label": "מ.נ.מ הכל לתעשיה בע\"מ",
		"category": "home.improvement"
	}, {
		"label": "כביש 6",
		"category": "rout6"
	}, {
		"label": "דלאל",
		"category": "restaurants"
	}, {
		"label": "לנדוור רמת החייל",
		"category": "recreation.coffee"
	}, {
		"label": "רחיצת ספידו",
		"category": "car.wash"
	}, {
		"label": "ח-ן שרות סלקום",
		"category": "recreation.tv"
	}, {
		"label": "ג'רמיה",
		"category": "restaurants"
	}, {
		"label": "AMAZON SERVICES-KINDLE 866-321-8851",
		"category": "recreation.books"
	}, {
		"label": "כספומט אלונית נ מושב נוו",
		"category": "cash"
	}, {
		"label": "ITUNES.COM/BILL        ITUNES.COM",
		"category": "recreation.other"
	}, {
		"label": "WWW.ALIEXPRESS.COM     LONDON",
		"category": "aliexpress"
	}, {
		"label": "NETFLIX.COM            AMSTERDAM",
		"category": "recreation.tv"
	}, {
		"label": "קסטרו כפר סבא - אושי",
		"category": "clothes"
	}, {
		"label": "רכבת סגולה - פתח תקו",
		"category": "car.alternative"
	}, {
		"label": "איקאה נתניה",
		"category": "home.improvement"
	}, {
		"label": "הום סנטר כפר סבא",
		"category": "home.improvement"
	}, {
		"label": "איקאה מסעדות ראשל\"צ",
		"category": "recreation.coffee"
	}, {
		"label": "שגב קונספט כפר סבא",
		"category": "restaurants"
	}, {
		"label": "הוניגמן T N T",
		"category": "clothes"
	}, {
		"label": "איקאה-ריהוט ועיצוב הבית",
		"category": "home.improvement"
	}, {
		"label": "יס פלאנט זכרון יעקב -קופו",
		"category": "recreation.other"
	}, {
		"label": "יס פלאנט זכרון יעקב - מזנ",
		"category": "recreation.other"
	}, {
		"label": "קרוסטה פיצה וחברים",
		"category": "restaurants"
	}, {
		"label": "קלאב פארם בע\"מ",
		"category": "pharm"
	}, {
		"label": "מקדונלד'ס אלון ושרון",
		"category": "restaurants"
	}, {
		"label": "ישראדאנס רשת חנויות",
		"category": "clothes"
	}, {
		"label": "PET POINT",
		"category": "kiwi"
	}, {
		"label": "יער האיילים",
		"category": "vacation"
	}, {
		"label": "יער האיילים",
		"category": "vacation"
	}, {
		"label": "LAKA",
		"category": "beauty"
	}, {
		"label": "לחייל ולטייל",
		"category": "clothes"
	}, {
		"label": "לחייל ולטייל",
		"category": "vacation"
	}, {
		"label": "מסעדת נידאל",
		"category": "restaurants"
	}, {
		"label": "ארומה גן הצפון",
		"category": "recreation.coffee"
	}, {
		"label": "מיטשוס בעמ",
		"category": "restaurants"
	}, {
		"label": "טן רומת אל הייב",
		"category": "car.gas"
	}, {
		"label": "הסטודיו של יעל",
		"category": "recreation.hoog"
	}, {
		"label": "בית מרקחת סביון עין",
		"category": "pharm"
	}, {
		"label": "ספרינט מוטורוס בע\"מ -  שע",
		"category": "car.gas"
	}, {
		"label": "גולף קידס און ליין-ג",
		"category": "clothes"
	}, {
		"label": "B בזק הוראת קבע",
		"category": "home.internet"
	}, {
		"label": "אר קפה",
		"category": "recreation.coffee"
	}, {
		"label": "ארקפה הבימה",
		"category": "recreation.coffee"
	}, {
		"label": "הודיס בעמ",
		"category": "clothes"
	}, {
		"label": "חברת חשמל מחוז דרום",
		"category": "home.electric"
	}, {
		"label": "סופר-פארם  - קניון V",
		"category": "pharm"
	}, {
		"label": "רולדין הוד השרון",
		"category": "recreation.coffee"
	}, {
		"label": "מחסני תאורה כפר סבא-",
		"category": "home.improvement"
	}, {
		"label": "JAPANIKA-אם הדרך",
		"category": "restaurants"
	}, {
		"label": "מנהרות הכרמל-שער אגרה",
		"category": "rout6"
	}, {
		"label": "סופרפארם רמת חייל",
		"category": "pharm"
	}, {
		"label": "רכבת סבידור תל אביב",
		"category": "car.alternative"
	}, {
		"label": "קפה מתתיהו-גמא",
		"category": "recreation.coffee"
	}, {
		"label": "ג.י.ל לבובסקי בע''מ",
		"category": "recreation.coffee"
	}, {
		"label": "רכבת הוד השרון - כפר",
		"category": "car.alternative"
	}, {
		"label": "לנדוור הוד השרון",
		"category": "recreation.coffee"
	}, {
		"label": "תמריק-קפה מעדנייה",
		"category": "recreation.coffee"
	}]
};

//set the category attributes 
$("tr.item, tr.alternatingItem").each(function() { 
  $this = $(this); 
  var name = $(this.children[1]).find("span").attr("title"); 
  this.setAttribute("category", "unknown"); 
  for (var i = 0; i < categorized_labels.values.length; i++) { 
      if (name == categorized_labels.values[i].label) { 
          this.setAttribute("category", categorized_labels.values[i].category); 
      } 
  } 
}); 
  
//sum evry category 
var sums = {}; 
var matched = $("tr.item, tr.alternatingItem").each(function() { 
  var cat = $(this).attr("category"); 
  var price =  parseFloat($(this).children()[4].innerText.replace(',', '')); 
  if (!(cat in sums)) { 
      sums[cat] = price; 
  } else { 
    sums[cat] += price; 
  } 
}); 
  
  
//add colors 
var matched = $("tr.item, tr.alternatingItem").each(function() { 
  var cat = $(this).attr("category"); 
  $(this).css('background-color', colors[cat]); 
}); 
 
 
//sort the table 
var sorted_matched = matched.sort(function(a,b) { 
    return a.getAttribute("category").localeCompare(b.getAttribute("category")); 
}) 
 
//put everything in one table 
var old_body = $("table.dataTable.summaryGrid > tbody")[0]; 
var new_body = document.createElement('tbody'); 
for (var i = 0; i < sorted_matched.length; i++) { 
    new_body.appendChild(sorted_matched[i].cloneNode(true)); 
} 
old_body.parentNode.replaceChild(new_body, old_body); 
 
 
//delete everything else 
for (var i=1; i < $("table.dataTable.summaryGrid > tbody").length; i++) { 
  var body_to_delete = $("table.dataTable.summaryGrid > tbody")[i]; 
  var empty_body = document.createElement('tbody'); 
  body_to_delete.parentNode.replaceChild(empty_body, body_to_delete); 
} 
 
 
//add sums to rows 
 
var row_string = '<tr><td></td><td></td><td></td><td>{0}</td><td>{1}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'; 
 
Object.keys(sums).forEach(function(category) { 
  var x = $(new_body).find("tr[category='" + category + "']:last"); 
  if (typeof x !== 'undefined') { 
    x.after(row_string.replace("{0}", category).replace("{1}", sums[category])); 
  }	 
}) 
 
$( document ).ready(function() {
  $("table.dataTable.summaryGrid").delegate("tr", "click", function(e) { 
      var element_text = $(e.currentTarget.children[1]).find("span").attr("title"); 
      var available_categories = "\n"; 
      Object.keys(colors).forEach(function(item,index) { 
        available_categories += (item + "\n"); 
      }) 

      var users_entry = prompt("add\n" + element_text + "\nto category: \n" + available_categories, "unknown"); 
      categorized_labels.values.push({
        label:   element_text,
        category: users_entry
      });
      e.currentTarget.setAttribute("category", users_entry); 
    }); 
});



