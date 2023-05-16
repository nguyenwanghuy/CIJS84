export const A = [1,5,3,8,10]
 const soDuong = A.filter((value)=> value %2 ===0)
export let total = 0;
 for( let i=0;i<soDuong.length;i++) {
    total+= soDuong[i]
 }

const soLe = A.filter((value)=> value %2 ===1) 
export let totalLe = 0;
for (let i=0;i<soLe.length;i++) {
   totalLe += soLe[i]
}