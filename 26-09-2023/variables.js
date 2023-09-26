{
    var a = 1;
    a++;
    /* a is globally scoped variable, 
    it is accessible anywhere within the closure */

    document.writeln("within scope a = ", a);
}

{
    let b = 2;
    b++;
    /* b is local scoped,
    it is accessible within the same closure
    */
    document.writeln("within scope b = ", b);
}

{
    const c = 3;
    c++;
    /* c is constant variable,
    so we can not modify its value
    */
    document.writeln("within scope c = ", c);
}

document.writeln("outside scope a = ", a);
document.writeln("outside scope b = ", b);
document.writeln("outside scope c = ", c);