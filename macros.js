syntax පල = function (ctx) {
    let returnValue = ctx.next().value;
    return #`return ${returnValue}`;
};

syntax විචල්‍ය = function (ctx) {
    let name = ctx.next().value;
    ctx.next(); 
    let value = ctx.expand('expr').value;
    return #`let ${name} = ${value}`
};


syntax ක්‍රියාවලිය = function (ctx) {
  let name = ctx.next().value;
  let params = ctx.next().value;
  let body = ctx.next().value;
  return #`
  function ${name} ${params} {
    ${body} // <2>
  }`;
};

syntax කොන්දේසිය = function (ctx) {
    let condition = ctx.next().value;
    return #`if ${condition}`;
};

syntax ගනන්කරන්න = function (ctx) {
    let params = ctx.next().value;
    return #`for ${params}`;
};

syntax ඔවු = function (ctx) {
    return #`true`;
};

syntax නෑ = function (ctx) {
    return #`false`;
};

syntax ලියන්න = function (ctx) {
    const text = ctx.next().value;
    return #`console.log(${text})`;
};

Array.prototype.තියනවාද = function(element){
    return this.includes(element);
}

module.exports = {};