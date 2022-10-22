//let list1 = [0, 4, 7, 8, 44, 55];
//let list2 = [1, 16, 18, 19, 204, 299, 888];

// 0, 1, 4, 7, 8, 16, 18, 19, 44, 55, 204, 299, 888; median = 18


//let list1 = [1,2,3];
//let list2 = [3,4,5,6];

//1, 2, 3, 3, 4, 5, 6; median = 3

let list1 = [1,2,3];
let list2 = [4,5,6];

//1, 2, 3, 4, 5, 6; median = 3.5


main()


function main()
{
    document.getElementById("list1").innerHTML = list1;
    document.getElementById("list2").innerHTML = list2;
    document.getElementById("result").innerHTML = calculateMedianOfTwoSortedLists(list1, list2);
}

function calculateMedianOfTwoSortedLists(list1, list2)
{
    let halfwayPoint = (list1.length + list2.length)/2 - .5;
    let m = 0;
    let n = 0; 
    let temp;


    while (m + n <= halfwayPoint)
    {
        if(list1[m] < list2[n])
            temp = list1[m++];
        else
            temp = list2[n++];
    }

    //even
    if(isEven(list1.length + list2.length))
    {
        if(list1[m] < list2[n])
            return (temp + list1[m])/2;
        else
            return (temp + list2[n])/2;
    }
    else
    {
        return temp;
    }
}

function isEven(num)
{
    return num % 2 == 0;
}