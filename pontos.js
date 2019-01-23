function pontos(e,o){
	ACERTOU_PLACAR_EXATO=(e[0]==o[0])&&(e[1]==o[1]);
	ACERTOU_VENCEDOR=(e[0]-e[1]<0?-1:(e[0]-e[1]>0?1:0))==(o[0]-o[1]<0?-1:(o[0]-o[1]>0?1:0));
	ACERTOU_GOLS_DE_UMA_EQUIPE=(e[0]==o[0])||(e[1]==o[1]);
	
	if(ACERTOU_PLACAR_EXATO) return 30;
	if(ACERTOU_VENCEDOR && ACERTOU_GOLS_DE_UMA_EQUIPE) return 20;
	if(ACERTOU_VENCEDOR) return 15;
	if(ACERTOU_GOLS_DE_UMA_EQUIPE) return 5;
	return 0;
}

function retornoPlacar(placar){
	//placar=[1,0];
	var soma=0.0;
	$("[data-sportskey*='1-1-7-43-4'] .singleRow").each(function(){
		var c1=$(this).find('.priceColumn:eq(0) .opp').text().split('-');
		var c1_odds=Number($(this).find('.priceColumn:eq(0) .odds').text());
		if (c1=='') return;
		var p=[Number(c1[0]), Number(c1[1])];
		soma+=pontos(placar,p)*1.0/c1_odds;
	});

	$("[data-sportskey*='1-1-7-43-4'] .singleRow").each(function(){
		var c1=$(this).find('.priceColumn:eq(1) .opp').text().split('-');
		var c1_odds=Number($(this).find('.priceColumn:eq(1) .odds').text());
		if (c1=='') return;
		var p=[Number(c1[0]), Number(c1[1])];
		soma+=pontos(placar,p)*1.0/c1_odds;
		
	});

	$("[data-sportskey*='1-1-7-43-4'] .singleRow").each(function(){
		var c1=$(this).find('.priceColumn:eq(2) .opp').text().split('-');
		var c1_odds=Number($(this).find('.priceColumn:eq(2) .odds').text());
		if (c1=='') return;
		var p=[Number(c1[1]), Number(c1[0])];
		soma+=pontos(placar,p)*1.0/c1_odds;
		
	});

	return soma;
}

$([  [0,0],[1,0],[0,1], [1,1],[2,0],[0,2],[2,1],[1,2],[3,0],[0,3],[3,1],[1,3]   ]).each(function(){ console.log([this[0]+'x'+this[1],retornoPlacar(this)])} );
