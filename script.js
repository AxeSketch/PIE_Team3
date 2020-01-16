$(function(){

		$("#cart-items").slideUp();
		$(".cart").on("click", function () {
		$("#cart-items").slideToggle();
		});

		$("#items-basket").text("(" + ($("#list-item").children().length) + ")");

		
		$(".item").on("click", function () {
      $("#cart-items").slideDown();
     setTimeout(function(){
        $("#cart-items").slideUp();
     }, 2000)
			//adaug iteme in cos
			$(this).each(function () {
				var name = $(this).children(".item-detail").children("h4").text();
				var remove = "<button class='remove'> X </button>";
				var cena = "<span class='eachPrice'>" + (parseFloat($(this).children(".item-detail").children(".prices").children(".price").text())) + "</span>";
				$("#list-item").append("<li>" + name + "&#09; - &#09;" + cena + " lei" + remove + "</li>");

				//numarul de iteme din cos
				$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
				$("#items-basket").text();
        
	        // calculez totalul
	        var totalPrice = 0;
		        $(".eachPrice").each(function (){ 
		          var cenaEach = parseFloat($(this).text());
		          totalPrice+=cenaEach;
		        });
		        $("#total-price").text(totalPrice + " lei");
			});

			// sterg itemele din cos
			$(".remove").on("click", function () {
				$(this).parent().remove();

		        var totalPrice = 0;
		        $(".eachPrice").each(function (){ 
		          var cenaEach = parseFloat($(this).text());
		          totalPrice+=cenaEach;
		        });
		        $("#total-price").text(totalPrice + " lei");
				$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
			});
		});
})