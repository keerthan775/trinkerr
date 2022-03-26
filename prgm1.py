arr = ["11232","1123123213","11232", "112333913", "1123122"]
#arr = ["11232","121232","11111"]
filtered_arr = []
for i in arr:
    for k in range(len(i),0,-1):
        filtered_arr.append(i[:k])
    
        
output_arr = ''

for i in filtered_arr:
    count = 0
    for j in arr:
        if i in j:
            count += 1
    if count == len(arr):
        if len(i) > len(output_arr):
            output_arr = i
print(output_arr)