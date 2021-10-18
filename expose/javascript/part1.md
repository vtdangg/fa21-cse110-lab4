1. line 9 prints out 20
2. line 13 prints out 20
3. line 9 prints 20
4. line 13 returns an error because the let keyword only defines a variable within a block scope, meaning that it is only accessible within the if block that it is declared and defined in.
5. line 9 returns an error because result is declared as a const type. When line 7 tries to reassign the value of result, it gets an error since it is a constant type.
6. line 13 returns an error because result is declared as a const type. When line 7 tries to reassign the value of result, it gets an error since it is a constant type.