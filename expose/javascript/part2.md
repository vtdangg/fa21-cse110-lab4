1. Line 12 prints out 3 since i is declared as a var, and var data types have a function scope in this example. Since i has a function scope, it's value is able to be accessed outside of the for {} block. After going through 3 iterations of the for loop, the final value of i is 3.
2. At line 13, the console prints out 150 as the value of discountedPrice because it is of variable type, which means that the value of discountedPrice is accessible outside of the for {} block. After going through 3 iterations of the for loop, the final value of discountedPrice is 150.
3. At line 14, the console prints out 150 as the value of finalPrice. finalPrice is declared as a var, so it is accessible outside of the block scope, which is why it's final value as 150 (after the 3rd iteration of the for loop) is outputted when the value is called on outside of the for loop.
4. This function will return the discounted array. Javascript is able to return multiple values if they are contained or wrapped in an array.
5. There will be a reference error at line 12 because the variable i is declared with the let keyword, which only allows for block scope. i is declared within the for loop, so it is not accessible outside of the for loop block.
6. There will be a reference error at line 13 because the variable discountedPrice is declared as with the let keyword. discountedPrice is declared within the for loop block and therefore cannot be referenced outside of that block.
7. Line 14 prints out the value assigned to finalPrice, which is 150, since that is what it was last assigned to in the for loop. Since the value of finalPrice is changed in each iteration of the for loop, it contains the value of whatever was last assigned to it.
8. This function will return the discounted array. Javascript is able to return multiple values if they are contained or wrapped in an array.
9. It will return a reference error at line 11 since the variable is declared with the const keyword. Const values only have block scope, which means that i cannot be accessed outside of the for loop.
10. Line 12 will print out the value of length, which is 3
11. This function will return the discounted array. Javascript is able to return multiple values if they are contained or wrapped in an array.
12. 
    a) student.name
    b) student['Grad Year']
    c) student.greeting()
    d) student['Favorite Teacher'].name
    e) student.courseLoad[0]

13. arithmetic
    a) '3' + 2 = '32' since integers map to their exact string representation
    b) '3' - 2 = 1 since this occurs with math operations such as subtraction
    c) 3 + null = 3 since math operations causes null to map to 0
    d) '3' + null = '3null' since string conversion occurs
    e) true + 3 = 4 since true converts to 1 for math operations
    f) false + null = 0 since both false and null map to 0 in math operations
    g) '3' + undefined = '3undefined' since '3' is a string, so the operation converts undefined to a string
    h) '3' - undefined = NaN since undefined is NaN as a number and this tries to perform a math operation
14. comparison
    a) ‘2’ > 1 is true since '2' is converted to the number 2
    b) ‘2’ < ‘12’ is false because alphabetically 1 is less than 2 
    c) 2 == ‘2’ is true because the numeric values are equal
    d) 2 === ‘2’ is false because they are not of equal type (2 is a number and '2' is a string)
    e) true == 2 is false because true is == 1
    f) true === Boolean(2) is true because Boolean(2) is true and of boolean type
15. == compares if two values are the same, and their type can be converted. === compares if two values are the same and if they are the same type.
17. The result is that the callback function executes so that each num in the array [1,2,3] is operated on to multiply each number by 2. Then the array of [2,4,6] is returned. 
19. 1
    4
    3
    2 