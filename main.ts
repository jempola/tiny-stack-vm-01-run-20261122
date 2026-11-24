import{mkdirSync as A,readdirSync as B,readFileSync as C,writeFileSync as D}from'node:fs';
import{join as J}from'node:path';
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of B(I).sort()){
const p=C(J(I,d,'program.bin')),g=C(J(I,d,'input.bin')),r=R(p,g);
A(J(O,d),{recursive:true});
D(J(O,d,'stdout.bin'),r[0]);
D(J(O,d,'exit.txt'),r[1]+'\n');}
function R(p,g){
const n=p.length,D=new Int32Array(256),E=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);
let s=0,c=0,j=0,pc=0,t=0,l=0;
const T=atob('ABFBBAYKCw8AAAAAAAAAAAkJCQkJCQkFCQkJBQkJCQAJCQkAAAAAAAAAAAAAAAAAICQkIAAAAAAAAAAAAAAAAAUIAAAAAAAAAAAAAAAAAAAEBAEE');
const F=x=>[o.slice(0,l),x];
for(;;){
if(t===1e6)return F(10);
if(pc<0||pc>=n)return F(9);
const k=p[pc],v=T.charCodeAt(k)||0,m=v>>4,a=(v>>2)&3,u=v&3;
if(pc+m>=n)return F(9);
t++;const x=pc+1+m;
if(s<a)return F(2);
if(s-a+u>256)return F(3);
pc=x;
if(k===0)return F(0);
else if(k===1)D[s++]=(p[x-1]<<24)>>24;
else if(k===2)D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;
else if(k===3)s--;
else if(k===4){D[s]=D[s-1];s++;}
else if(k===5){const w=D[s-1];D[s-1]=D[s-2];D[s-2]=w;}
else if(k===6){D[s]=D[s-2];s++;}
else if(k===7){const w=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=w;}
else if(k>=16&&k<=34&&k!==23&&k!==27){
const b=D[s-1],A=D[s-2];
if(k>=19&&k<=22&&b===0)return F(4);
const r=k===16?(A+b)|0:k===17?(A-b)|0:k===18?Math.imul(A,b):k===19?A===1<<31&&b===-1?A:(A/b)|0:k===20?b===-1?0:A%b|0:k===21?(A>>>0)/(b>>>0)|0:k===22?(A>>>0)%(b>>>0)|0:k===24?A&b:k===25?A|b:k===26?A^b:k===28?A<<(b&31):k===29?A>>(b&31):k===30?(A>>>(b&31))|0:k===32?A===b?1:0:k===33?A<b?1:0:(A>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=r;}
else if(k===23)D[s-1]=-D[s-1]|0;
else if(k===27)D[s-1]=~D[s-1];
else if(k>=48&&k<=50){
const y=((p[x-2]|p[x-1]<<8)<<16)>>16;
let f=k===48;
if(k!==48){const z=D[--s];f=k===49?z===0:z!==0;}
if(f)pc=x+y;}
else if(k===51){if(c===64)return F(7);E[c++]=x;pc=p[x-2]|p[x-1]<<8;}
else if(k===52){if(c===0)return F(8);pc=E[--c];}
else if(k===64){const A=D[s-1];if(A<0||A>255)return F(6);D[s-1]=M[A];}
else if(k===65){const A=D[s-1];if(A<0||A>255)return F(6);s-=2;M[A]=D[s];}
else if(k===80){const y=String(D[s-1]);if(l+y.length>65536)return F(11);o.set(Buffer.from(y),l);l+=y.length;s--;}
else if(k===81){if(l+1>65536)return F(11);o[l++]=D[--s]&255;}
else if(k===82)D[s++]=j<g.length?g[j++]:-1;
else if(k===83)return F(D[--s]&255);
else return F(5);
}}
