!function(){function e(){var t,n,r,i,o;for(t=document.getElementsByTagName("*"),n=0;n<t.length;n++)if(t[n].getAttribute("w3-include-html")){var o;return r=t[n].cloneNode(!1),i=t[n].getAttribute("w3-include-html"),(o=new XMLHttpRequest).onreadystatechange=function(){4==o.readyState&&200==o.status&&(r.removeAttribute("w3-include-html"),r.innerHTML=o.responseText,t[n].parentNode.replaceChild(r,t[n]),e())},o.open("GET",i,!0),void o.send()}}e()}();