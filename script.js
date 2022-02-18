let tabs = ['tab1','tab2','tab3','tab4'];

function tabing(tab){
  for(let i=0;i<tabs.length;i++){
    document.getElementById(tabs[i]).style.display = 'none';
  }
  document.getElementById(''+tab+'').style.display = 'flex';
}