let name = document.getElementById('name');
let quantity = document.getElementById('quantity');
let flavorsNumber = document.getElementById('flavorsNumber');
let iceCreams = document.getElementById('iceCreams');
let iceCreamsContainer = document.getElementById('iceCreamsContainer');
let price = document.getElementById('price');
let priceText = document.getElementsByClassName('priceText');

let flavors = `<select name="iceCream" id="iceCreams" class="iceCreams" required>
			<option disabled selected>Sabores</option>
			<optgroup label="Dulce de leche">
				<option value="dl">Dulce de leche</option>
				<option value="dg">Dulce Granizado</option>
				<option value="dc">Dulce Cabsha</option>
				<option value="dp">Dulce Pepe</option>
			</optgroup>
			<optgroup label="Chocolate">
				<option value="ch">Chocolate</option>
				<option value="cr">Chocolate Rocher</option>
				<option value="cn">Choco Nuez</option>
				<option value="ct">Choco Torta</option>
				<option value="cp">Choco Pepe</option>
				<option value="cb">Choco Blanco</option>
				<option value="ca">Chocolate Amargo</option>
			</optgroup>
			<optgroup label="Cremas">
				<option value="ts">Tiramisú</option>
				<option value="tm">Tramontana</option>
				<option value="sy">Sambayón</option>
				<option value="mg">Menta granizada</option>
				<option value="gd">Granizado</option>
				<option value="fn">Flan</option>
				<option value="ac">Americana</option>
				<option value="va">Vainilla</option>
			</optgroup>
			<optgroup label="Frutales">
				<option value="">Frutilla a la Crema</option>
				<option value="">Frutos Rojos</option>
				<option value="">Banana Split</option>
				<option value="">Limón al agua</option>
				<option value="">Durazno al agua</option>
				<option value="">Maracuyá al agua</option>
			</optgroup>
		</select>`;

let order = document.getElementById('order')
let orderNumber = 8128;
let orderContainer = document.getElementById('orderContainer');

let button = document.getElementById('button');


quantity.addEventListener('change',function (){
	if (quantity.value == "oneKg"){

		flavorsNumber.style.display = "block";
		// priceText.style.display = "block";
		// price.style.display = "block";
		price.value = "US$ 8";

		flavorsNumber.innerHTML = `<option value="flavor" disabled selected>Cuantos sabores quieres?</option>
			<option value="one">1</option>
			<option value="two">2</option>
			<option value="three">3</option>
			<option value="four">4</option>
			<option value="five">5</option>`;

	}else if(quantity.value == "halfKg"){

		flavorsNumber.style.display = "block";
		// priceText.style.display = "block";
		// price.style.display = "block";
		price.value = "US$ 5";


		flavorsNumber.innerHTML = `<option value="flavor" disabled selected>Cuantos sabores quieres?</option>
			<option value="one">1</option>
			<option value="two">2</option>
			<option value="three">3</option>`;

	}else if(quantity.value == "quarterKg"){

		flavorsNumber.style.display = "block";
		// priceText.style.display = "block";
		// price.style.display = "block";
		price.value = "US$ 3";


		flavorsNumber.innerHTML = `<option value="flavor" disabled selected>Cuantos sabores quieres?</option>
			<option value="one">1</option>
			<option value="two">2</option>`;
	}
})

flavorsNumber.addEventListener('change', function(){
	if(flavorsNumber.value == "one"){

		iceCreamsContainer.style.display = "block";

		iceCreamsContainer.innerHTML = flavors;

	}else if(flavorsNumber.value == "two"){

		iceCreamsContainer.style.display = "block";

		iceCreamsContainer.innerHTML = flavors;
		iceCreamsContainer.innerHTML += flavors;

	}else if(flavorsNumber.value == "three"){

		iceCreamsContainer.style.display = "block";

		iceCreamsContainer.innerHTML = flavors;
		iceCreamsContainer.innerHTML += flavors;
		iceCreamsContainer.innerHTML += flavors;

	}else if(flavorsNumber.value ==  "four"){

		iceCreamsContainer.style.display = "block";

		iceCreamsContainer.innerHTML = flavors;
		iceCreamsContainer.innerHTML += flavors;
		iceCreamsContainer.innerHTML += flavors;
		iceCreamsContainer.innerHTML += flavors;

	}else if(flavorsNumber.value == "five"){

		iceCreamsContainer.style.display = "block";

		iceCreamsContainer.innerHTML = flavors;
		iceCreamsContainer.innerHTML += flavors;
		iceCreamsContainer.innerHTML += flavors;
		iceCreamsContainer.innerHTML += flavors;
		iceCreamsContainer.innerHTML += flavors;
	}
	button.style.display = "block";
})

button.addEventListener('click', function(){
	let n = name.value;
	let p = price.value;
	orderContainer.innerHTML +=`<div id="order">
			<h1 class="orderHeader">Su orden: #${orderNumber}</h1>
			<h2 class="orderSubHeader">Monto a pagar: ${p}</h2>
			<p class="orderText">Muchas gracias <span class="nameColor">${n}</span> por su comprar</p>
		</div>`;
	orderNumber++;
})
