input_arr = ["Valorant","Valorant(1)","Valorant","Valorant(2019)"]
//input_arr = ["naruto","naruto(1)","naruto(2)","naruto(3)", "naruto"]
//input_arr = ["Valorant","GTA5","Fortnite","Valorant(2019)"]
output_arr = []
for(let i in input_arr){
    [temp_value1, count] = input_arr[i].split('(')
    if(count){
        count = count.split(')')[0]
    }
    if(i == 0){
        output_arr[0] = input_arr[0]
    }
    else if(input_arr[i].includes('(')){
        output_arr[i] = input_arr[i]
    }
    else{
        try{
            prev_count = input_arr[i-1].split('(')[1].split(')')[0]
            cur_count = +prev_count + 1
            output_arr[i] = input_arr[i] + '(' + cur_count+ ')'
        }
        catch(err){
            output_arr[i] = input_arr[i]
        }
        
    }
    

}
console.log(output_arr)
