document.getElementById('second-content').style.display = 'none';
// clicking search button
const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    const food_name0 = document.getElementById('food_name').value;
    const food_name = food_name0.toLocaleLowerCase();
    print_food_grid(food_name);
    

})
const url = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;

        //  calling function 8 times individually to print the cards 
        function print_food_grid(food_name) {

    food_one_card_print(food_name, 'first', 0, url);
    food_one_card_print(food_name, 'second', 1, url);
        
    food_one_card_print(food_name, 'third', 2, url);
    food_one_card_print(food_name, 'fourth', 3, url);
        
    food_one_card_print(food_name, 'fifth', 4, url);
    food_one_card_print(food_name, 'sixth', 5, url);
        
    food_one_card_print(food_name, 'seventh', 6, url);
    food_one_card_print(food_name, 'eighth', 7, url);
        }


        //  slicing the derived array to 8
        const food_one_card_print = (food_name, id_name, index, url) => 
        {
            fetch(url)
                .then(res => res.json())
                .then(data => print_list(data))
                const print_list = (data) => {
                    std_spell = 'breakfast';
                    const value = std_spell.localeCompare(food_name);
                    // if breakfast, then:
                    if (value == 0) {
                    const food_list_in_array = data.hits;
                    console.log(food_list_in_array)
                const breakfast_sliced = food_list_in_array.slice(6,14);
                console.log(breakfast_sliced);

                //  each food as object:
                const each_item = breakfast_sliced[index].recipe;
                    console.log(each_item);
//  data gula ber kori
                    const name = each_item.label;
                    const img = each_item.image;
                    
console.log(name, img)

                    // dom thik kora, card banano
                    const whole_card_div = document.createElement('div');
                    const card_content_image = `
                    <img id="list-img-size" src=${img} alt="">`
                    const div_image = document.createElement('div');
                    div_image.innerHTML = card_content_image;
                    whole_card_div.appendChild(div_image);

                    const card_content_titles = `
                    <h1 id="name">${name}</h1>`
                    const div_titles = document.createElement('div');
                    div_titles.id = "title";
                    div_titles.innerHTML = card_content_titles;
                    whole_card_div.appendChild(div_titles);
                    whole_card_div.id = "whole-card-div";
                    document.getElementById(id_name).appendChild(whole_card_div);
                                       
                }
                        
            }
        }
////////////////////////////

// ekhon each item click korle ager ongsho chole jabe, r selected item er ingredient asbe
const card_button_1 = document.getElementById('first');
const card_button_2 = document.getElementById('second');
const card_button_3 = document.getElementById('third');
const card_button_4 = document.getElementById('fourth');
 
const card_button_5 = document.getElementById('fifth');
const card_button_6 = document.getElementById('sixth');
const card_button_7 = document.getElementById('seventh');
const card_button_8 = document.getElementById('eighth');


card_button_1.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 0, url_2);

})

card_button_2.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 1, url_2);

})

card_button_3.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 2, url_2);

})

card_button_4.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 3, url_2);

})

card_button_5.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 4, url_2);

})

card_button_6.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 5, url_2);

})

card_button_7.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 6, url_2);

})

card_button_8.addEventListener('click', () => {
    const url_2 = `https://api.edamam.com/api/recipes/v2?app_key=af59b975e23b4ac561f7a8701459b540&mealType=Breakfast&_cont=CHcVQBtNNQphDmgVQ3tAEX4BY0tzAgoCUXlSAmZGYQZ2B1ADFzZCUDZAZAAhDQFTQDRIAzZHagcgBgMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&cuisineType=Japanese&imageSize=REGULAR&type=public&app_id=9fc21310`;
    console.log('card 1 is clicked')
    show_ingredient('second-content', 7, url_2);

})




function show_ingredient(id_Name, indeX, url_2){
    console.log('hi '+ id_Name, indeX, url_2);
    card_button_1.style.display = 'none';
    card_button_2.style.display = 'none';
    card_button_3.style.display = 'none';
    card_button_4.style.display = 'none';
    card_button_5.style.display = 'none';
    card_button_6.style.display = 'none';
    card_button_7.style.display = 'none';
    card_button_8.style.display = 'none';
    document.getElementById("h1").style.display = 'none';
    document.getElementById("search").style.display = 'none';

    fetch(url_2)
    .then(res => res.json())
    .then(data => fetch_ingredient(data))

    function fetch_ingredient(data){
        console.log(data)
        const food_list_in_array_2 = data.hits;
                    console.log(food_list_in_array_2)
                const breakfast_sliced_2 = food_list_in_array_2.slice(6,14);
                console.log(breakfast_sliced_2);

                //  each food as object:
                const each_item_2 = breakfast_sliced_2[indeX].recipe;
                    console.log(each_item_2);
                    const name_2 = each_item_2.label;
                    const img_2 = each_item_2.image;
                
                //ekhon whole card ta banate hobe, r ingredient er part add korte hobe na, karon oita add koreci agei
                const whole_card_div_2 = document.createElement('div');
                const card_content_image_2 = `
                <img id="list-img-size-2" src=${img_2} alt="">`
                const div_image_2 = document.createElement('div');
                div_image_2.innerHTML = card_content_image_2;
                whole_card_div_2.appendChild(div_image_2);

                const card_content_titles_2 = `
                <h1 id="name">${name_2}</h1>
                <span id="span">Ingredients</span>`
                const div_titles_2 = document.createElement('div');
                div_titles_2.id = "title-2";
                div_titles_2.innerHTML = card_content_titles_2;
                whole_card_div_2.appendChild(div_titles_2);

                whole_card_div_2.id = "whole-card-div-2";
                document.getElementById(id_Name).appendChild(whole_card_div_2);

                // ingredients ber kori:
                const arr_of_ingredients_2 = each_item_2.ingredients;
                arr_of_ingredients_2.map(object => ingredients_print(object.text))

                function ingredients_print(text){
                    const li = document.createElement('li');
                    const ul = document.createElement('ul');
                    const line = `<img id="svg-check" src="file:///C:/Users/User/Downloads/verify-black-square-interface-button-symbol.svg" alt=""> &nbsp ${text}`
                    li.innerHTML = line;
                    li.id = "li"
                    ul.appendChild(li);
                    ul.id = "ul";
                    whole_card_div_2.appendChild(ul);
                }
                   

// making display="grid" ingredients part
                document.getElementById('second-content').style.display = 'grid';
    }
}