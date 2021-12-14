async function adBlockDetect() {
    eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) {
                d[e(c)] = k[c] || e(c)
            }
            k = [function(e) {
                return d[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1
        };
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
            }
        }
        return p
    }(';q N=\'\',2g=\'21\';1J(q i=0;i<12;i++)N+=2g.V(D.M(D.K()*2g.F));q 2m=1,2s=4P,2t=16,2y=52,35=B(t){q o=!1,i=B(){z(k.1k){k.2K(\'2O\',e);E.2K(\'1Y\',e)}S{k.2L(\'2P\',e);E.2L(\'1Z\',e)}},e=B(){z(!o&&(k.1k||4N.2F===\'1Y\'||k.2M===\'2N\')){o=!0;i();t()}};z(k.2M===\'2N\'){t()}S z(k.1k){k.1k(\'2O\',e);E.1k(\'1Y\',e)}S{k.2Q(\'2P\',e);E.2Q(\'1Z\',e);q n=!1;2R{n=E.4K==4J&&k.2e}2T(a){};z(n&&n.2S){(B r(){z(o)H;2R{n.2S(\'14\')}2T(e){H 4H(r,50)};o=!0;i();t()})()}}};E[\'\'+N+\'\']=(B(){q t={t$:\'21+/=\',4G:B(e){q r=\'\',d,n,o,c,s,l,i,a=0;e=t.e$(e);1b(a<e.F){d=e.1a(a++);n=e.1a(a++);o=e.1a(a++);c=d>>2;s=(d&3)<<4|n>>4;l=(n&15)<<2|o>>6;i=o&63;z(2U(n)){l=i=64}S z(2U(o)){i=64};r=r+U.t$.V(c)+U.t$.V(s)+U.t$.V(l)+U.t$.V(i)};H r},13:B(e){q n=\'\',d,l,c,s,a,i,r,o=0;e=e.1x(/[^A-4F-4E-9\\+\\/\\=]/g,\'\');1b(o<e.F){s=U.t$.1R(e.V(o++));a=U.t$.1R(e.V(o++));i=U.t$.1R(e.V(o++));r=U.t$.1R(e.V(o++));d=s<<2|a>>4;l=(a&15)<<4|i>>2;c=(i&3)<<6|r;n=n+P.T(d);z(i!=64){n=n+P.T(l)};z(r!=64){n=n+P.T(c)}};n=t.n$(n);H n},e$:B(t){t=t.1x(/;/g,\';\');q n=\'\';1J(q o=0;o<t.F;o++){q e=t.1a(o);z(e<1s){n+=P.T(e)}S z(e>4D&&e<4B){n+=P.T(e>>6|4n);n+=P.T(e&63|1s)}S{n+=P.T(e>>12|2X);n+=P.T(e>>6&63|1s);n+=P.T(e&63|1s)}};H n},n$:B(t){q o=\'\',e=0,n=4A=1C=0;1b(e<t.F){n=t.1a(e);z(n<1s){o+=P.T(n);e++}S z(n>4z&&n<2X){1C=t.1a(e+1);o+=P.T((n&31)<<6|1C&63);e+=2}S{1C=t.1a(e+1);32=t.1a(e+2);o+=P.T((n&15)<<12|(1C&63)<<6|32&63);e+=3}};H o}};q r=[\'4w==\',\'4v\',\'4u=\',\'4t\',\'4s\',\'4r=\',\'4q=\',\'4p=\',\'4o\',\'4Q\',\'4C=\',\'4R=\',\'5a\',\'5o\',\'5n=\',\'5m\',\'5l=\',\'5k=\',\'5j=\',\'5i=\',\'5h=\',\'5g=\',\'5f==\',\'5e==\',\'5d==\',\'5c==\',\'5b=\',\'59\',\'4T\',\'58\',\'57\',\'56\',\'55\',\'54==\',\'53=\',\'51=\',\'4Z=\',\'4Y==\',\'4X=\',\'4W\',\'4l=\',\'4U=\',\'4S==\',\'4m=\',\'4h==\',\'4k==\',\'3M=\',\'3L=\',\'3K\',\'3J==\',\'3I==\',\'3H\',\'3G==\',\'3F=\'],f=D.M(D.K()*r.F),Y=t.13(r[f]),W=Y,Z=1,w=\'#3E\',a=\'#3D\',g=\'#3C\',v=\'#3B\',C=\'\',b=\'3A! (3y 1p&2d;o!)\',p=\'3u 3s 3r 3p\\\'3o 3w 3n 36 37. 3m\\\'s 3l.  3q 3t\\\'t? (C&2c; vẻ 1Wư bạn sử dụ1o 24&23;1W 1pặn 2zả1o c&2G;o? 38, 3v m&2d; 1pả d&39;1o n&2c;!)\',y=\'3N 3z 3P-45, 4j 4i\\\'t 3O 4g U 4f 4e. (4dư1o... c&2c; lẽ 1p&34;1o t&4b;i cần một 1p&34;t 4a 49&48; để 47 24&23; 46 44 n&2d;y)\',s=\'I 3Q, I 43 42 41 36 37.  3Z 3Y 3X! (38, 2H 3Wểu r&39;i, 2H sẽ tắt \\\'24&23;1W 1pặn 2zả1o c&2G;o\\\' 5p đ&4V;y!!!)\',o=0,u=0,n=\'5r.5s\',l=0,R=e()+\'.2p\';B h(t){z(t)t=t.1G(t.F-15);q o=k.2w(\'71\');1J(q n=o.F;n--;){q e=P(o[n].1V);z(e)e=e.1G(e.F-15);z(e===t)H!0};H!1};B m(t){z(t)t=t.1G(t.F-15);q e=k.6w;x=0;1b(x<e.F){1q=e[x].1K;z(1q)1q=1q.1G(1q.F-15);z(1q===t)H!0;x++};H!1};B e(t){q n=\'\',o=\'21\';t=t||30;1J(q e=0;e<t;e++)n+=o.V(D.M(D.K()*o.F));H n};B i(o){q i=[\'6X\',\'6Y==\',\'72\',\'74\',\'2n\',\'6t==\',\'6u=\',\'6z==\',\'6s=\',\'6G==\',\'3x==\',\'6r==\',\'6L\',\'6N\',\'6J\',\'2n\'],a=[\'2o=\',\'6F==\',\'6E==\',\'6D==\',\'6B=\',\'6A\',\'6y=\',\'6x=\',\'2o=\',\'6M\',\'6C==\',\'6O\',\'75==\',\'73==\',\'70==\',\'6Z=\'];x=0;1L=[];1b(x<o){c=i[D.M(D.K()*i.F)];d=a[D.M(D.K()*a.F)];c=t.13(c);d=t.13(d);q r=D.M(D.K()*2)+1;z(r==1){n=\'//\'+c+\'/\'+d}S{n=\'//\'+c+\'/\'+e(D.M(D.K()*20)+4)+\'.2p\'};1L[x]=26 28();1L[x].2b=B(){q t=1;1b(t<7){t++}};1L[x].1V=n;x++}};B Q(t){};H{2J:B(t,a){z(6U k.J==\'6T\'){H};q o=\'0.1\',a=W,e=k.1e(\'1y\');e.1j=a;e.j.1i=\'1M\';e.j.14=\'-1r\';e.j.X=\'-1r\';e.j.1z=\'2h\';e.j.11=\'6S\';q d=k.J.2q,r=D.M(d.F/2);z(r>15){q n=k.1e(\'2j\');n.j.1i=\'1M\';n.j.1z=\'1D\';n.j.11=\'1D\';n.j.X=\'-1r\';n.j.14=\'-1r\';k.J.6Q(n,k.J.2q[r]);n.1d(e);q i=k.1e(\'1y\');i.1j=\'2r\';i.j.1i=\'1M\';i.j.14=\'-1r\';i.j.X=\'-1r\';k.J.1d(i)}S{e.1j=\'2r\';k.J.1d(e)};l=5U(B(){z(e){t((e.27==0),o);t((e.29==0),o);t((e.1Q==\'33\'),o);t((e.1P==\'2Z\'),o);t((e.1I==0),o)}S{t(!0,o)}},2f)},1H:B(e,c){z((e)&&(o==0)){o=1;E[\'\'+N+\'\'].1E();E[\'\'+N+\'\'].1H=B(){H}}S{q y=t.13(\'6p\'),u=k.5R(y);z((u)&&(o==0)){z((2s%3)==0){q l=\'5P=\';l=t.13(l);z(h(l)){z(u.1O.1x(/\\s/g,\'\').F==0){o=1;E[\'\'+N+\'\'].1E()}}}};q f=!1;z(o==0){z((2t%3)==0){z(!E[\'\'+N+\'\'].2A){q d=[\'5N==\',\'5M==\',\'5L=\',\'5K=\',\'5J=\'],m=d.F,a=d[D.M(D.K()*m)],r=a;1b(a==r){r=d[D.M(D.K()*m)]};a=t.13(a);r=t.13(r);i(D.M(D.K()*2)+1);q n=26 28(),s=26 28();n.2b=B(){i(D.M(D.K()*2)+1);s.1V=r;i(D.M(D.K()*2)+1)};s.2b=B(){o=1;i(D.M(D.K()*3)+1);E[\'\'+N+\'\'].1E()};n.1V=a;z((2y%3)==0){n.1Z=B(){z((n.11<8)&&(n.11>0)){E[\'\'+N+\'\'].1E()}}};i(D.M(D.K()*3)+1);E[\'\'+N+\'\'].2A=!0};E[\'\'+N+\'\'].1H=B(){H}}}}},1E:B(){z(u==1){q L=2C.5B(\'2D\');z(L>0){H!0}S{2C.5A(\'2D\',(D.K()+1)*2f)}};q h=\'5y==\';h=t.13(h);z(!m(h)){q c=k.1e(\'5x\');c.2a(\'5w\',\'5v\');c.2a(\'2F\',\'1h/5t\');c.2a(\'1K\',h);k.2w(\'5F\')[0].1d(c)};5T(l);k.J.1O=\'\';k.J.j.17+=\'O:1D !19\';k.J.j.17+=\'1F:1D !19\';q R=k.2e.29||E.3h||k.J.29,f=E.6c||k.J.27||k.2e.27,r=k.1e(\'1y\'),Z=e();r.1j=Z;r.j.1i=\'2W\';r.j.14=\'0\';r.j.X=\'0\';r.j.11=R+\'1t\';r.j.1z=f+\'1t\';r.j.3i=w;r.j.1X=\'6m\';k.J.1d(r);q d=\'<a 1K="6l://6k.6j" j="G-1f:10.6i;G-1l:1m-1n;1g:6h;">6g 6f 6e 6d 6b 5V</a>\';d=d.1x(\'6a\',e());d=d.1x(\'68\',e());q i=k.1e(\'1y\');i.1O=d;i.j.1i=\'1M\';i.j.1u=\'1U\';i.j.14=\'1U\';i.j.11=\'67\';i.j.1z=\'66\';i.j.1X=\'3g\';i.j.1I=\'.6\';i.j.3a=\'2u\';i.1k(\'62\',B(){n=n.61(\'\').5Z().5Y(\'\');E.2x.1K=\'//\'+n});k.1T(Z).1d(i);q o=k.1e(\'1y\'),Q=e();o.1j=Q;o.j.1i=\'2W\';o.j.X=f/7+\'1t\';o.j.5X=R-69+\'1t\';o.j.6n=f/3.5+\'1t\';o.j.3i=\'#5z\';o.j.1X=\'3g\';o.j.17+=\'G-1l: "5C 5D", 1A, 1v, 1m-1n !19\';o.j.17+=\'5E-1z: 5H !19\';o.j.17+=\'G-1f: 5I !19\';o.j.17+=\'1h-1B: 1w !19\';o.j.17+=\'1F: 5O !19\';o.j.1Q+=\'3b\';o.j.3e=\'1U\';o.j.5Q=\'1U\';o.j.6P=\'2l\';k.J.1d(o);o.j.6v=\'1D 3R 3S -5q 3V(0,0,0,0.3)\';o.j.1P=\'2I\';q W=30,Y=22,x=18,C=18;z((E.3h<3c)||(40.11<3c)){o.j.3d=\'50%\';o.j.17+=\'G-1f: 4x !19\';o.j.3e=\'4y;\';i.j.3d=\'65%\';q W=22,Y=18,x=12,C=12};o.1O=\'<3j j="1g:#4I;G-1f:\'+W+\'1N;1g:\'+a+\';G-1l:1A, 1v, 1m-1n;G-1S:4L;O-X:1c;O-1u:1c;1h-1B:1w;">\'+b+\'</3j><3k j="G-1f:\'+Y+\'1N;G-1S:4O;G-1l:1A, 1v, 1m-1n;1g:\'+a+\';O-X:1c;O-1u:1c;1h-1B:1w;">\'+p+\'</3k><6I j=" 1Q: 3b;O-X: 0.3f;O-1u: 0.3f;O-14: 2k;O-2E: 2k; 2B:4c 6H #6W; 11: 25%;1h-1B:1w;"><p j="G-1l:1A, 1v, 1m-1n;G-1S:2v;G-1f:\'+x+\'1N;1g:\'+a+\';1h-1B:1w;">\'+y+\'</p><p j="O-X:5u;"><2j 3U="U.j.1I=.9;" 5W="U.j.1I=1;"  1j="\'+e()+\'" j="3a:2u;G-1f:\'+C+\'1N;G-1l:1A, 1v, 1m-1n; G-1S:2v;2B-6o:2l;1F:1c;5S-1g:\'+g+\';1g:\'+v+\';1F-14:2h;1F-2E:2h;11:60%;O:2k;O-X:1c;O-1u:1c;" 6q="E.2x.5G();">\'+s+\'</2j></p>\'}}})();E.2V=B(t,e){q n=6K.6V,o=E.6R,r=n(),i,a=B(){n()-r<e?i||o(a):t()};o(a);H{3T:B(){i=1}}};q 2Y;z(k.J){k.J.j.1P=\'2I\'};35(B(){z(k.1T(\'2i\')){k.1T(\'2i\').j.1P=\'33\';k.1T(\'2i\').j.1Q=\'2Z\'};2Y=E.2V(B(){E[\'\'+N+\'\'].2J(E[\'\'+N+\'\'].1H,E[\'\'+N+\'\'].4M)},2m*2f)});', 62, 440, '|||||||||||||||||||style|document||||||var|||||||||if||function||Math|window|length|font|return||body|random||floor|CUKAURwohais|margin|String|||else|fromCharCode|this|charAt||top||||width||decode|left|||cssText||important|charCodeAt|while|10px|appendChild|createElement|size|color|text|position|id|addEventListener|family|sans|serif|ng|ch|thisurl|5000px|128|px|bottom|geneva|center|replace|DIV|height|Helvetica|align|c2|0px|gXrRylIUAQ|padding|substr|jGCDDzqXxL|opacity|for|href|spimg|absolute|pt|innerHTML|visibility|display|indexOf|weight|getElementById|30px|src|nh|zIndex|load|onload||ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789||igrave|tr||new|clientHeight|Image|clientWidth|setAttribute|onerror|oacute|agrave|documentElement|1000|wrKCEmzaim|60px|babasbmsgx|div|auto|15px|tEILvgWebx|cGFydG5lcmFkcy55c20ueWFob28uY29t|ZmF2aWNvbi5pY28|jpg|childNodes|banner_ad|codCBSyVFy|qOtIrqCMeS|pointer|300|getElementsByTagName|location|XvDjVnYjuH|qu|ranAlready|border|sessionStorage|babn|right|type|aacute|tui|visible|qLlAJPohJY|removeEventListener|detachEvent|readyState|complete|DOMContentLoaded|onreadystatechange|attachEvent|try|doScroll|catch|isNaN|FeAnPVtMZv|fixed|224|jUrCXUvNpl|none|||c3|hidden|uacute|vakYDNxTKV|ad|blocker|Okay|ugrave|cursor|block|640|zoom|marginLeft|5em|10000|innerWidth|backgroundColor|h3|h1|okay|That|an|re|you|Who|like|looks|doesn|It|ai|using|YWRzLnlhaG9vLmNvbQ|Xin|without|Welcome|FFFFFF|adb8ff|777777|EEEEEE|c3BvbnNvcmVkX2xpbms|b3V0YnJhaW4tcGFpZA|Z29vZ2xlX2Fk|YWRzZW5zZQ|cG9wdXBhZA|YWRzbG90|YmFubmVyaWQ|YWRzZXJ2ZXI|But|keep|advertising|understand|14px|24px|clear|onmouseover|rgba|hi|in|me|Let|screen|my|disabled|have|web|income|trang|duy|iacute|ph|kinh|ocirc|1px|Nh|awesome|site|making|IGFkX2JveA|can|we|YWRfY2hhbm5lbA|YWRCYW5uZXI|YmFubmVyYWQ|192|YWQtZm9vdGVy|YWQtbGI|YWQtbGFiZWw|YWQtaW5uZXI|YWQtaW1n|YWQtaGVhZGVy|YWQtZnJhbWU|YWRCYW5uZXJXcmFw|YWQtbGVmdA|18pt|45px|191|c1|2048|YWQtY29udGFpbmVyLTE|127|z0|Za|encode|setTimeout|999|null|frameElement|200|UWtcCSPvQD|event|500|202|YWQtY29udGFpbmVy|YWQtY29udGFpbmVyLTI|YWRBZA|RGl2QWQy|YWRiYW5uZXI|acirc|YmFubmVyX2Fk|YWRUZWFzZXI|Z2xpbmtzd3JhcHBlcg|QWRDb250YWluZXI||QWRCb3gxNjA||QWREaXY|QWRJbWFnZQ|RGl2QWRD|RGl2QWRC|RGl2QWRB|RGl2QWQz|RGl2QWQx|QWQzMDB4MTQ1|RGl2QWQ|QWRzX2dvb2dsZV8wNA|QWRzX2dvb2dsZV8wMw|QWRzX2dvb2dsZV8wMg|QWRzX2dvb2dsZV8wMQ|QWRMYXllcjI|QWRMYXllcjE|QWRGcmFtZTQ|QWRGcmFtZTM|QWRGcmFtZTI|QWRGcmFtZTE|QWRBcmVh|QWQ3Mjh4OTA|QWQzMDB4MjUw|ngay|8px|moc|kcolbdakcolb|css|35px|stylesheet|rel|link|Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw|fff|setItem|getItem|Arial|Black|line|head|reload|normal|16pt|Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28|Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28|Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28|Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw|Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw|12px|Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM|marginRight|querySelector|background|clearInterval|setInterval|revenue|onmouseout|minWidth|join|reverse||split|click||||40px|160px|FILLVECTID2|120|FILLVECTID1|lost|innerHeight|recapture|and|AdBlock|Block|black|5pt|com|blockadblock|http|9999|minHeight|radius|aW5zLmFkc2J5Z29vZ2xl|onclick|YWRzLnp5bmdhLmNvbQ|Y2FzLmNsaWNrYWJpbGl0eS5jb20|YS5saXZlc3BvcnRtZWRpYS5ldQ|YWdvZGEubmV0L2Jhbm5lcnM|boxShadow|styleSheets|Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI|YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc|YWR2ZXJ0aXNpbmcuYW9sLmNvbQ|MTM2N19hZC1jbGllbnRJRDI0NjQuanBn|c2t5c2NyYXBlci5qcGc|c3F1YXJlLWFkLnBuZw|NzIweDkwLmpwZw|NDY4eDYwLmpwZw|YmFubmVyLmpwZw|cHJvbW90ZS5wYWlyLmNvbQ|solid|hr|YXMuaW5ib3guY29t|Date|YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t|YWQtbGFyZ2UucG5n|YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t|ZmF2aWNvbjEuaWNv|borderRadius|insertBefore|requestAnimationFrame|468px|undefined|typeof|now|CCC|YWRuLmViYXkuY29t|YWQubWFpbC5ydQ|YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc|d2lkZV9za3lzY3JhcGVyLmpwZw|script|anVpY3lhZHMuY29t|bGFyZ2VfYmFubmVyLmdpZg|YWQuZm94bmV0d29ya3MuY29t|YmFubmVyX2FkLmdpZg'.split('|'), 0, {}));
    let adBlockEnabled = false
    try {
        await fetch(new Request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')).catch(_ => adBlockEnabled = true)
    } catch (e) {
        adBlockEnabled = true
    } finally {
        if (adBlockEnabled) {
            document.title = 'Vui lòng tắt trình chặn quảng cáo (Please turn off the Adblock)';
            document.body.innerHTML = '<iframe src="https://phonglan123.github.io/pad/turnOffAdblock.html" style="position: absolute; top: -4px; left: -4px; width: 100%; height: 100%;"></iframe>';
        }
    }
}

function showPadAds() {
    var elms = document.querySelectorAll("[id='padAdsBlock']");
    for (var i = 0; i < elms.length; i++)
        elms[i].innerHTML = loadAdsBlockOnElm();
}
    
function loadAdsBlockOnElm() {
    padAdsDb = padAdsDb.sort(() => Math.random() - 0.5);
    var getRandom = Math.floor(Math.random() * padAdsDb.length),
        link = padAdsDb[getRandom].l,
        title = padAdsDb[getRandom].t,
        imageURL = padAdsDb[getRandom].i,
        adsTitleInnerText = document.createElement('b');
    adsTitleInnerText.innerText = title;
    return '<meta name="viewport" content="width=device-width, initial-scale=1.0"><iframe src="https://phonglan123.github.io/pad/" style="position: absolute; top: -1000px; left: -1000px"></iframe><div style="border: 1px solid #ccc; height: 63px; width: 100%; user-select: none; cursor: pointer; font: 15px Arial, sans-serif; margin: auto; background: white; text-align: left;"><div onclick="window.open(' + "'https://phonglan123.github.io/pad/go.html?target=" + encodeURIComponent(link) + "'" + '); showPadAds();" style="font-weight: bold;"> <img src="' + imageURL + '" style="margin: 5px; height: 53px; width: 100px"/> <div style="width: calc(100% - 115px); margin-top: -60px; margin-left: 110px; text-align: justify; height: 35px; overflow: hidden; color: blue;">' + adsTitleInnerText.innerHTML + '</div><div style="width: calc(100% - 137px); overflow: hidden; margin-left: 132px; white-space: nowrap; font-weight: normal;">' + new URL(link).hostname + '</div><div style="border: 1px solid #ddd; background: white; margin-top: -18px; width: 16px; max-width: calc(100% - 120px); height: 16px; overflow: hidden; text-align: center; margin-left: 110px" onclick="window.open(' + "'" + 'https://github.com/phonglan123/pad/blob/main/README.md#%C4%91%C4%83ng-k%C3%AD-qu%E1%BA%A3ng-c%C3%A1o' + "'" + '); showPadAds();">?</div></div></div>';
}

function addScript(src) {
    var my_awesome_script = document.createElement('script');
    my_awesome_script.setAttribute('src', src);
    document.head.appendChild(my_awesome_script);
}

function desnetRssCb(json) {
    json.feed.entry.forEach(article => {
        var thumbnail = defaultValue.blogspotImage;
        if ('media$thumbnail' in article)
            thumbnail = article['media$thumbnail'].url;
        padAdsDb.push({
            l: article.link[4].href,
            i: thumbnail,
            t: article.title.$t
        });
    });
}

function loadVideoAd(video) {
    padAdsVideoDb = padAdsVideoDb.sort(() => Math.random() - 0.5);
    var getRandom = Math.floor(Math.random() * padAdsVideoDb.length),
        adSrc = padAdsVideoDb[getRandom].v,
        adLink = padAdsVideoDb[getRandom].l,
        adTitle = padAdsVideoDb[getRandom].t,
        adsTitleInnerText = document.createElement('b'),
        videoSrc = video.src;

    var wrapper = document.createElement('div'),
        adsSkip = document.createElement('div'),
        adsLink = document.createElement('div'),
        adsSkipTimeRemain = 5,
        adsSkipTimer = setInterval(() => {
            if (adsSkipTimeRemain == -1) {
                clearInterval(adsSkipTimer);
                adsSkip.innerHTML = defaultValue.adsVideoAlert.split('|')[1];
                adsSkip.style.color = 'blue';
                adsSkip.onclick = endTheAd;
            } else
                adsSkip.innerHTML = defaultValue.adsVideoAlert.split('|')[0].replace('?', adsSkipTimeRemain);
            adsSkipTimeRemain--;
        }, 1000),
        endTheAd = () => {
            video.onended = () => {};
            video.src = videoSrc;
            video.load();
            video.play();
            video.controls = 'controls';
            adsSkip.style.display = 'none';
            adsLink.style.display = 'none';
        };

    adsSkip.innerHTML = defaultValue.adsVideoAlert.split('|')[0].replace('?', adsSkipTimeRemain);
    adsSkip.style = 'border: 1px solid #ccc; box-shadow: 0 0 8px 0 #ccc; color: red; width: fit-content; padding: 4px; cursor: pointer; user-select: none; margin-top: -45px; z-index: auto; position: absolute; background: white; margin-left: 8px; height: 20px; font-style: normal;';
    adsTitleInnerText.innerText = adTitle;
    adsLink.innerHTML = adsTitleInnerText.innerHTML;
    adsLink.style = 'border: 1px solid #ccc; box-shadow: 0 0 8px 0 #ccc; width: 250px; padding: 4px; cursor: pointer; user-select: none; margin-top: -75px; z-index: auto; position: absolute; background: #ccc; margin-left: 8px; height: 20px; overflow: hidden; font-style: normal;';
    adsLink.onclick = () => window.open('https://phonglan123.github.io/pad/go.html?target=' + encodeURIComponent(adLink));
    video.parentNode.replaceChild(wrapper, video);
    wrapper.appendChild(video);
    wrapper.appendChild(adsSkip);
    wrapper.appendChild(adsLink);

    video.onplay = () => {};
    video.src = adSrc;
    video.load();
    video.play();
    video.controls = '';
    video.onended = endTheAd;
}
    

function getDomainName(url) {
    var TLDs = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", "xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", "xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", "xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", "yt", "za", "zm", "zw"].join(),
        parts = url.split('.'),
    ln = parts.length,
    i = ln,
    minLength = parts[parts.length - 1].length,
    part

  while (part = parts[--i])
    if (TLDs.indexOf(part) < 0 || part.length < minLength || i < ln - 2 || i === 0)
      return part;
}

function docLoaded() {
    var links = document.getElementsByTagName("A"),
        linksExcept = ['bp.blogspot.com', 'googleusercontent', 'blogger.com', 'fbcdn.net', new URL(location.href).hostname],
        includesExtra = (originalString, queries) => {
            var includes = false;
            queries.forEach(query => originalString.includes(query) ? includes = true : null);
            return includes;
        };

    for (var i = 0; i < links.length; i++)
        if (links[i].href.includes("http") && !includesExtra(new URL(links[i].href).hostname, linksExcept)) {
            links[i].href = 'https://phonglan123.github.io/pad/go.html?target=' + encodeURIComponent(links[i].href);
            links[i].target = "_blank";
            if (links[i].innerHTML.includes("http"))
                links[i].innerHTML = links[i].innerHTML.substring(0, links[i].innerHTML.length / 1.5) + "...";
        }

    for (var i = 0; i < document.getElementsByTagName('video').length; i++) {
        if (Math.random() * 100 > 60)
            document.getElementsByTagName('video')[i].onplay = (e) => loadVideoAd(e.target);
    }

    setTimeout(showPadAds, 1000);
    setInterval(showPadAds, 30000);
    adBlockDetect();
}

addScript('https://phonglan123.github.io/pad/padAdsBlockDb.js');
addScript('https://code.jquery.com/jquery-3.6.0.slim.min.js');
addScript('https://desnetnhaponline.blogspot.com/feeds/posts/summary?orderby=published&max-results=500&alt=json-in-script&callback=desnetRssCb');
addScript('https://phongnguyenhai8420.blogspot.com/feeds/posts/summary?orderby=published&max-results=500&alt=json-in-script&callback=desnetRssCb');
addScript('https://desnetvietnam.blogspot.com/feeds/posts/summary?orderby=published&max-results=500&alt=json-in-script&callback=desnetRssCb');
addScript('https://miphidili.blogspot.com/feeds/posts/summary?orderby=published&max-results=500&alt=json-in-script&callback=desnetRssCb');
addScript('https://piecablog.blogspot.com/feeds/posts/summary?orderby=published&max-results=500&alt=json-in-script&callback=desnetRssCb');
setTimeout(docLoaded, 1000);
    
var defaultValue = {
        blogspotImage: 'https://bizflyportal.mediacdn.vn/bizflyportal/1396/2428/2021/04/26/17/17/blo16194106288091.jpg',
        adsVideoAlert: 'Bỏ qua trong ? giây|Bỏ qua quảng cáo'
    },
    padAdsDb = [],
    padAdsVideoDb = [];
