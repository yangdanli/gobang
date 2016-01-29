window.onload=function(){
	var 
	ROW=15,
	// width=Math.floor( (700-ROW)/ROW )+'px',
	width=(700-ROW)/ROW +'px',
	sence=document.getElementById('sence'),
	el1,el2;
	for(var i=0;i<ROW;i++){
		el1=document.createElement('id');
		el1.style.position='absolute';
		el1.style.top=(700/ROW)/2+(700/ROW)*i+'px';
		el1.style.width='700px';
		el1.style.height='2px';
		el1.style.background='black';
		sence.appendChild(el1);

		el2=document.createElement('id');
		el2.style.position='absolute';
		el2.style.left=(700/ROW)/2+(700/ROW)*i+'px';
		el2.style.height='700px';
		el2.style.width='2px';
		el2.style.background='black';
		sence.appendChild(el2);
	}
	
	for(i=0;i<ROW;i++){
		for(var j=0;j<ROW;j++){
			var block=document.createElement('div');
			block.setAttribute('class','block');
			block.setAttribute('id',i+'_'+j);
			sence.appendChild(block);
			block.style.width=width;
			block.style.height=width;
		}
	}
	var 
	dict1={},
	dict2={},
	en;
	var panduan=function(id,dic){
		var x=Number(id.split('_')[0]);
		var y=Number(id.split('_')[1]);
		var tx ,ty;

		var hang=1;
		tx=x;ty=y;
		while( dic[tx+'_'+(ty+1)] ){hang++;ty++;}
		tx=x;ty=y;
		while( dic[tx+'_'+(ty-1)] ){hang++;ty--;}
		if(hang==5) return true;

		var lie=1;
		tx=x;ty=y;
		while( dic[(tx+1)+'_'+ty] ){lie++;tx++;}
		tx=x;ty=y;
		while( dic[(tx-1)+'_'+ty] ){lie++;tx--;}
		if(lie==5) return true;

		var yx=1;
		tx=x;ty=y;
		while( dic[(tx+1)+'_'+(ty+1)] ){yx++;tx++;ty++}
		tx=x;ty=y;
		while( dic[(tx-1)+'_'+(ty-1)] ){yx++;tx--;ty--}
		if(yx==5) return true;

		var zx=1;
		tx=x;ty=y;
		while( dic[(tx-1)+'_'+(ty+1)]){ zx++;ty++;tx--; }
		tx=x;ty=y;
		while( dic[(tx+1)+'_'+(ty-1)]){ zx++;ty--;tx++; }
		if(zx==5) return true;

		return false;
	};

	var blocks=document.getElementsByClassName('block');
	var bianse=true;
	
	for(var i=0;i<blocks.length;i++){
		blocks[i].onclick=function(){
			if(this.hasAttribute('hasColor')){
				return ;
			}
			en=this.getAttribute('id');
			if(bianse){
				this.style.background='url(./images/a.png) no-repeat 0px 0px';
				// this.style.background='white';
				bianse=false;
				this.style.boxShadow='0 5px 10px #3e1f0f';
				dict1[en]=true;
				if(panduan(en,dict1)){
					alert('白棋赢了');
				}
			}else{
				this.style.background='url(./images/aa.png) no-repeat 0px 0px';
				// this.style.background='black';
				bianse=true;
				this.style.boxShadow='0 5px 10px #141617';
				dict2[en]=true;
				if(panduan(en,dict2)){
					alert('黑棋赢了');
				}
			}
			this.setAttribute('hasColor','true');
		};
	}
	


};