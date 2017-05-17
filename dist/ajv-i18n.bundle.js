require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
module.exports = function localize_cz(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'reference ' + (e.params.ref) + ' nenalezena';
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'nemůže mít víc, než ' + (n) + ' prv';
        if (n == 1) {
          out += 'ek';
        } else {
          out += 'ků';
        }
        break;
      case 'additionalProperties':
        out = 'nemůže mít další položky';
        break;
      case 'anyOf':
        out = 'musí vyhovět alespoň jedné schémě v "anyOf"';
        break;
      case 'constant':
        out = 'musí být konstantní';
        break;
      case 'contains':
        out = 'musí obsahovat prvek odpovídající schématu';
        break;
      case 'custom':
        out = 'musí vyhovět "' + (e.keyword) + '" validaci';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += ' musí mít polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'ek';
        } else {
          out += 'ka';
        }
        out += ': ' + (e.params.deps) + ', pokud obsahuje ' + (e.params.property);
        break;
      case 'enum':
        out = 'musí být rovna jedné hodnotě z výčtu';
        break;
      case 'format':
        out = 'musí být ve formátu "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum musí být boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum musí být boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí být ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí být ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí být ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'nesmí mýt víc než ' + (n) + ' prv';
        if (n == 1) {
          out += 'ek';
        } else {
          out += 'ků';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'nesmí být delší než ' + (n) + ' znak';
        if (n != 1) {
          out += 'ů';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'nesmí mít víc než ' + (n) + ' polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'ek';
        } else {
          out += 'ka';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí být ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'nesmí mýt méně než ' + (n) + ' prv';
        if (n == 1) {
          out += 'ek';
        } else {
          out += 'ků';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'nesmí být kratší než ' + (n) + ' znak';
        if (n != 1) {
          out += 'ů';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'nesmí mít méně než ' + (n) + ' polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'ek';
        } else {
          out += 'ka';
        }
        break;
      case 'multipleOf':
        out = 'musí být násobkem ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'nesmí vyhovět schémě v "not"';
        break;
      case 'oneOf':
        out = 'musí vyhovět právě jedné schémě v "oneOf"';
        break;
      case 'pattern':
        out = 'musí vyhovět regulárnímu výrazu "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'musí mýt ' + (e.params.reason) + ' ' + (n) + ' polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'ek';
        } else {
          out += 'ka';
        }
        out += ' vyhovující regulárnímu výrazu "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'musí mýt položku vyhovující regulárnímu výrazu "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'musí mýt požadovanou položku ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'musí projít validácí "switch", případ ' + (e.params.caseIndex) + ' je neúspěšný';
        break;
      case 'type':
        out = 'musí být ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'nesmí mýt duplicitní prvky (prvky ## ' + (e.params.j) + ' a ' + (e.params.i) + ' jsou stejné)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],2:[function(require,module,exports){
'use strict';
module.exports = function localize_de(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'kann die Referenz ' + (e.params.ref) + ' nicht auflösen';
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht mehr als ' + (n) + ' Element';
        if (n != 1) {
          out += 'e';
        }
        out += ' enthalten';
        break;
      case 'additionalProperties':
        out = 'sollte keine zusätzlichen Attribute haben';
        break;
      case 'anyOf':
        out = 'sollte einem der Schemata in "anyOf" entsprechen';
        break;
      case 'constant':
        out = 'sollte der Konstante entsprechen';
        break;
      case 'contains':
        out = 'sollte ein valides Element enthalten';
        break;
      case 'custom':
        out = 'sollte die Validierung "' + (e.keyword) + '" bestehen';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'sollte Attribut';
        if (n != 1) {
          out += 'e';
        }
        out += ' ' + (e.params.deps) + ' aufweisen, wenn Attribut ' + (e.params.property) + ' gesetzt ist';
        break;
      case 'enum':
        out = 'sollte einem der vorgegebenen Werte entsprechen';
        break;
      case 'format':
        out = 'sollte diesem Format entsprechen: "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum sollte ein boolscher Wert sein';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum sollte ein boolscher Wert sein';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'sollte ' + (cond) + ' sein';
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'sollte ' + (cond) + ' sein';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'sollte ' + (cond) + ' sein';
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht mehr als ' + (n) + ' Element';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht länger als ' + (n) + ' Zeichen sein';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht mehr als ' + (n) + ' Attribut';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'sollte ' + (cond) + ' sein';
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht weniger als ' + (n) + ' Element';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht kürzer als ' + (n) + ' Zeichen sein';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht weniger als ' + (n) + ' Attribut';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'multipleOf':
        out = 'sollte ein Vielfaches von ' + (e.params.multipleOf) + ' sein';
        break;
      case 'not':
        out = 'sollte dem in "not" angegebenen Schema widersprechen';
        break;
      case 'oneOf':
        out = 'sollte genau einem der Schemata in "oneOf" entsprechen';
        break;
      case 'pattern':
        out = 'sollte diesem Muster entsprechen: "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'sollte ' + (e.params.reason) + ' ' + (n) + ' Attribut';
        if (n != 1) {
          out += 'e';
        }
        out += ' nach folgendem Muster haben "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'sollte ein Attribut nach folgendem Muster haben "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'sollte das erforderliche Attribut ' + (e.params.missingProperty) + ' enthalten';
        break;
      case 'switch':
        out = 'sollte der "switch" Validierung entsprechen, der Fall ' + (e.params.caseIndex) + ' schlägt fehl';
        break;
      case 'type':
        out = 'sollte sein: ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'sollte keine Duplikate enthalten (Elemente #' + (e.params.j) + ' und #' + (e.params.i) + ' sind gleich)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],3:[function(require,module,exports){
'use strict';
module.exports = function localize_en(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'can\\\'t resolve reference ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'should not have more than ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'additionalProperties':
        out = 'should not have additional properties';
        break;
      case 'anyOf':
        out = 'should match some schema in "anyOf"';
        break;
      case 'constant':
        out = 'should be equal to constant';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = 'should pass "' + (e.keyword) + '" keyword validation';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'should have propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        out += ' ' + (e.params.deps) + ' when property ' + (e.params.property) + ' is present';
        break;
      case 'enum':
        out = 'should be equal to one of predefined values';
        break;
      case 'format':
        out = 'should match format "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum should be boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum should be boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'should not have more than ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'should not be longer than ' + (n) + ' character';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'should not have more than ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'should not have less than ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'should not be shorter than ' + (n) + ' character';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'should not have less than ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        break;
      case 'multipleOf':
        out = 'should be a multiple of ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'should not be valid according to schema in "not"';
        break;
      case 'oneOf':
        out = 'should match exactly one schema in "oneOf"';
        break;
      case 'pattern':
        out = 'should match pattern "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'should have ' + (e.params.reason) + ' ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        out += ' matching pattern "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'should have property matching pattern "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'should have required property ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'should pass "switch" keyword validation, case ' + (e.params.caseIndex) + ' fails';
        break;
      case 'type':
        out = 'should be ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'should not have duplicate items (items ## ' + (e.params.j) + ' and ' + (e.params.i) + ' are identical)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],4:[function(require,module,exports){
'use strict';
module.exports = function localize_es(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'no se puede resolver la referencia ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'no debe tener más de ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'additionalProperties':
        out = 'no debe tener propiedades adicionales';
        break;
      case 'anyOf':
        out = 'debe coincidir con algún esquema en "anyOf"';
        break;
      case 'constant':
        out = 'debe ser igual a la constante';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = 'debe pasar la validación de palabra clave "' + (e.keyword) + '"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'debe contener la';
        if (n != 1) {
          out += 's';
        }
        out += ' propiedad';
        if (n != 1) {
          out += 'es';
        }
        out += ' ' + (e.params.deps) + ' cuando la propiedad ' + (e.params.property) + ' se encuentra presente';
        break;
      case 'enum':
        out = 'deber ser igual a uno de los valores predefinidos';
        break;
      case 'format':
        out = 'debe coincidir con el formato "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum debe ser booleano';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum debe ser booleano';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'debe ser ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'debe ser ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'debe ser ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener más de ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener más de ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener más de ' + (n) + ' propiedad';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'debe ser ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener menos de ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener menos de ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener menos de ' + (n) + ' propiedad';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'multipleOf':
        out = 'debe ser múltiplo de ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'no debe ser válido según el esquema en "not"';
        break;
      case 'oneOf':
        out = 'debe coincidir con un solo esquema en "oneOf"';
        break;
      case 'pattern':
        out = 'debe coincidir con el patron "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'debe tener ' + (e.params.reason) + ' ' + (n) + ' propiedad';
        if (n != 1) {
          out += 'es';
        }
        out += ' coincidente';
        if (n != 1) {
          out += 's';
        }
        out += ' con el patrón "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'la propiedad debe coincidir con el patrón "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'debe tener la propiedad requerida ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'debe pasar la validación "switch" de palabra clave, el caso ' + (e.params.caseIndex) + ' falló';
        break;
      case 'type':
        out = 'debe ser ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'no debe contener elementos duplicados, (los elementos ## ' + (e.params.j) + ' y ' + (e.params.i) + ' son idénticos)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],5:[function(require,module,exports){
'use strict';
module.exports = function localize_fr(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'impossible d\\\'accéder à la référénce ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'ne doit pas contenir plus de ' + (n) + ' élémént';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'additionalProperties':
        out = 'ne doit pas contenir de propriétés additionnelles';
        break;
      case 'anyOf':
        out = 'doit correspondre à un schéma de "anyOf"';
        break;
      case 'constant':
        out = 'doit être égal à la constante';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = 'doit être valide selon le critère "' + (e.keyword) + '"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'doit avoir la propriété ' + (e.params.deps) + ' quand la propriété ' + (e.params.property) + ' est présente';
        break;
      case 'enum':
        out = 'doit être égal à une des valeurs prédéfinies';
        break;
      case 'format':
        out = 'doit correspondre au format "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum doit être un booléen';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum doit être un booléen';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'doit être ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'doit être ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'doit être ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'ne doit pas contenir plus de ' + (n) + ' élément';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'ne doit pas dépasser ' + (n) + ' caractère';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'ne doit pas contenir plus de ' + (n) + ' propriété';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'doit être ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'ne doit pas contenir moins de ' + (n) + ' élément';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'ne doit pas faire moins de ' + (n) + ' caractère';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'ne doit pas contenir moins de ' + (n) + ' propriété';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'multipleOf':
        out = 'doit être un multiple de ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'est invalide selon le schéma "not"';
        break;
      case 'oneOf':
        out = 'doit correspondre à exactement un schéma de "oneOf"';
        break;
      case 'pattern':
        out = 'doit correspondre au format "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'doit avoir ' + (e.params.reason) + ' ' + (n) + ' propriété';
        if (n != 1) {
          out += 's';
        }
        out += ' correspondant au format "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'la propriété doit correspondre au format "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'requiert la propriété ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'doit être valide selon le critère "switch":validation par mot-clé, le cas ' + (e.params.caseIndex) + ' est invalide';
        break;
      case 'type':
        out = 'doit être de type ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'ne doit pas contenir de doublons (les éléments ## ' + (e.params.j) + ' et ' + (e.params.i) + ' sont identiques)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],6:[function(require,module,exports){
'use strict';
module.exports = function localize_hu(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'nem sikerült feloldani a hivatkozást ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet több, mint ' + (n) + ' eleme';
        break;
      case 'additionalProperties':
        out = 'nem lehetnek további elemei';
        break;
      case 'anyOf':
        out = 'meg kell feleljen legalább egy "anyOf" alaknak';
        break;
      case 'constant':
        out = 'should be equal to constant';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = 'should pass "' + (e.keyword) + '" keyword validation';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += '-nak kell legyen';
        if (n > 1) {
          out += 'ek';
        }
        out += ' a következő tulajdonsága';
        if (n != 1) {
          out += 'i';
        }
        out += ': ' + (e.params.deps) + ', ha van ' + (e.params.property) + ' tulajdonsága';
        break;
      case 'enum':
        out = 'egyenlő kell legyen valamely előre meghatározott értékkel';
        break;
      case 'format':
        out = 'meg kell feleljen a következő formátumnak: "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum should be boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum should be boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'kell legyen ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet több, mint ' + (n) + ' eleme';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet hosszabb, mint ' + (n) + ' szimbólum';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet több, mint ' + (n) + ' tulajdonsága';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'kell legyen ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet kevesebb, mint ' + (n) + ' eleme';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet rövidebb, mint ' + (n) + ' szimbólum';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet kevesebb, mint ' + (n) + ' tulajdonsága';
        break;
      case 'multipleOf':
        out = 'a többszöröse kell legyen a következő számnak: ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'nem lehet érvényes a "not" alaknak megfelelően';
        break;
      case 'oneOf':
        out = 'meg kell feleljen pontosan egy "anyOf" alaknak';
        break;
      case 'pattern':
        out = 'meg kell feleljen a következő mintának: "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'should have ' + (e.params.reason) + ' ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        out += ' matching pattern "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'should have property matching pattern "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'kell legyen ' + (e.params.missingProperty) + ' tulajdonsága';
        break;
      case 'switch':
        out = 'should pass "switch" keyword validation, case ' + (e.params.caseIndex) + ' fails';
        break;
      case 'type':
        out = '' + (e.params.type) + ' kell legyen';
        break;
      case 'uniqueItems':
        out = 'nem lehetnek azonos elemei (' + (e.params.j) + ' és ' + (e.params.i) + ' elemek azonosak)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],7:[function(require,module,exports){
'use strict';
module.exports = function localize_it(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'non può risolvere il riferimento ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere più di ' + (n) + ' element';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'additionalProperties':
        out = 'non dovrebbe avere attributi aggiuntive';
        break;
      case 'anyOf':
        out = 'deve corrispondere qualche schema in "anyOf"';
        break;
      case 'constant':
        out = 'should be equal to constant';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = 'should pass "' + (e.keyword) + '" keyword validation';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'dovrebbe avere attribut';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        out += ' ' + (e.params.deps) + ' quando attributo ' + (e.params.property) + ' è presente';
        break;
      case 'enum':
        out = 'dovrebbe essere pari ad uno dei valori predefiniti';
        break;
      case 'format':
        out = 'deve corrispondere formato "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum should be boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum should be boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'dovrebbe essere ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere più di ' + (n) + ' element';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe essere più lungo di ' + (n) + ' caratter';
        if (n == 1) {
          out += 'e';
        } else {
          out += 'i';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere più ' + (n) + ' attribut';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'dovrebbe essere ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere meno di ' + (n) + ' element';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe essere meno lungo di ' + (n) + ' caratter';
        if (n == 1) {
          out += 'e';
        } else {
          out += 'i';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere meno ' + (n) + ' attribut';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'multipleOf':
        out = 'dovrebbe essere un multiplo di ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'non dovrebbe essere valida in base allo schema di "non"';
        break;
      case 'oneOf':
        out = 'dovrebbe corrispondere esattamente uno schema in "oneOf"';
        break;
      case 'pattern':
        out = 'deve corrispondere al modello "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'should have ' + (e.params.reason) + ' ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        out += ' matching pattern "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'should have property matching pattern "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'dovrebbe avere attributo richiesta ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'should pass "switch" keyword validation, case ' + (e.params.caseIndex) + ' fails';
        break;
      case 'type':
        out = 'dovrebbe essere ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'non dovrebbe avere elementi duplicati (elementi ## ' + (e.params.j) + ' e ' + (e.params.i) + ' sono uguali)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],8:[function(require,module,exports){
'use strict';
module.exports = function localize_ja(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = '' + (e.params.ref) + 'のスキーマを見つけることができない';
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '以上あってはいけない';
        break;
      case 'additionalProperties':
        out = '追加してはいけない';
        break;
      case 'anyOf':
        out = '"anyOf"のスキーマとマッチしなくてはいけない';
        break;
      case 'constant':
        out = 'should be equal to constant';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = 'should pass "' + (e.keyword) + '" keyword validation';
        break;
      case 'dependencies':
        out = '' + (e.params.property) + 'がある場合、';
        var n = e.params.depsCount;
        out += 'は' + (e.params.deps) + 'をつけなければいけない';
        break;
      case 'enum':
        out = '事前に定義された値のいずれかに等しくなければいけない';
        break;
      case 'format':
        out = '"' + (e.params.format) + '"形式に揃えなければいけない';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum should be boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum should be boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += (cond) + 'でなければいけない';
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以上であってはいけない';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '文字以上であってはいけない';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以上のプロパティを有してはいけない';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += (cond) + 'でなければいけない';
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以下であってはいけない';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '文字以下であってはいけない';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以下のプロパティを有してはいけない';
        break;
      case 'multipleOf':
        out = '' + (e.params.multipleOf) + 'の倍数でなければいけない';
        break;
      case 'not':
        out = '"not"のスキーマに従って有効としてはいけない';
        break;
      case 'oneOf':
        out = '"oneOf"のスキーマと完全に一致しなくてはいけない';
        break;
      case 'pattern':
        out = '"' + (e.params.pattern) + '"のパターンと一致しなければいけない';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'should have ' + (e.params.reason) + ' ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        out += ' matching pattern "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'should have property matching pattern "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = '必要なプロパティ' + (e.params.missingProperty) + 'がなければいけない';
        break;
      case 'switch':
        out = 'should pass "switch" keyword validation, case ' + (e.params.caseIndex) + ' fails';
        break;
      case 'type':
        out = '' + (e.params.type) + 'でなければいけない';
        break;
      case 'uniqueItems':
        out = '重複するアイテムがあってはいけない（' + (e.params.j) + 'と' + (e.params.i) + 'は同じである）';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],9:[function(require,module,exports){
'use strict';
module.exports = function localize_pl(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'nie można znaleść schematu ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien mieć więcej niż ' + (n) + ' element';
        if (n == 1) {
          out += 'u';
        } else {
          out += 'ów';
        }
        break;
      case 'additionalProperties':
        out = 'nie powinien zawierać dodatkowych pól';
        break;
      case 'anyOf':
        out = 'powinien pasować do wzoru z sekcji "anyOf"';
        break;
      case 'constant':
        out = 'powinien być równy stałej';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = 'powinien przejść walidację "' + (e.keyword) + '"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'powinien zawierać pol';
        if (n == 1) {
          out += 'e';
        } else {
          out += 'a';
        }
        out += ' ' + (e.params.deps) + ' kiedy pole ' + (e.params.property) + ' jest obecne';
        break;
      case 'enum':
        out = 'powinien być równy jednej z predefiniowanych wartości';
        break;
      case 'format':
        out = 'powinien zgadzać się z formatem "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum powinien być boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum powinień być boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'powinien być ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'powinien być ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'powinien być ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien mieć więcej niż ' + (n) + ' element';
        if (n == 1) {
          out += 'u';
        } else {
          out += 'ów';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien być dłuższy niż ' + (n) + ' znak';
        if (n != 1) {
          out += 'ów';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien zawierać więcej niż ' + (n) + ' ';
        if (n == 1) {
          out += 'pole';
        } else {
          out += 'pól';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'powinien być ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien mieć mniej niż ' + (n) + ' element';
        if (n == 1) {
          out += 'u';
        } else {
          out += 'ów';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien być krótszy niż ' + (n) + ' znak';
        if (n != 1) {
          out += 'ów';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien zawierać mniej niż ' + (n) + ' ';
        if (n == 1) {
          out += 'pole';
        } else {
          out += 'pól';
        }
        break;
      case 'multipleOf':
        out = 'powinien być wielokrotnością ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'nie powinien pasować do wzoru z sekcji "not"';
        break;
      case 'oneOf':
        out = 'powinien pasować do jednego wzoru z sekcji "oneOf"';
        break;
      case 'pattern':
        out = 'powinien zgadzać się ze wzorem "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'powinien mieć ' + (e.params.reason) + ' ' + (n) + ' pol';
        if (n == 1) {
          out += 'e';
        } else {
          out += 'a';
        }
        out += ' pasujące do wzorca "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'powinien mieć pole pasujące do wzorca "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'powinien zawierać wymagane pole ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'powinien przejść walidacje pola "switch", przypadek ' + (e.params.caseIndex) + ' zawiódł';
        break;
      case 'type':
        out = 'powinien być ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'nie powinien zawierać elementów które się powtarzają (elementy ' + (e.params.j) + ' i ' + (e.params.i) + ' są identyczne)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],10:[function(require,module,exports){
'use strict';
module.exports = function localize_pt_BR(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'Não é possível resolver a referência ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = 'Não são permitidos itens adicionais';
        break;
      case 'additionalProperties':
        out = 'Não são permitidas propriedades adicionais';
        break;
      case 'anyOf':
        out = 'Os dados não correspondem a nenhum esquema de "anyOf"';
        break;
      case 'constant':
        out = 'deve ser igual à constante';
        break;
      case 'contains':
        out = 'deve conter um item válido';
        break;
      case 'custom':
        out = 'deve passar a validação de palavras-chave "' + (e.keyword) + '"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += ' deve ter propriedade';
        if (n != 1) {
          out += 's';
        }
        out += ' ' + (e.params.deps) + ' quando a propriedade ' + (e.params.property) + ' estiver presente';
        break;
      case 'enum':
        out = 'Deve ser igual a um dos valores predefinidos';
        break;
      case 'format':
        out = 'A validação do formato falhou "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum deve ser um booleano';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMaximum deve ser um booleano';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter mais que ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter mais que ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter mais que ' + (n) + ' propriedade';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter menos que ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter menos que ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter menos que ' + (n) + ' propriedade';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'multipleOf':
        out = 'deve ser múltiplo de ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'não deve ser valido segundo o esquema em "not"';
        break;
      case 'oneOf':
        out = 'deve corresponder exatamente com um esquema em "oneOf"';
        break;
      case 'pattern':
        out = 'deve corresponder ao padrão "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'deve ter ' + (e.params.reason) + ' ' + (n) + ' propriedade';
        if (n != 1) {
          out += 's';
        }
        out += ' padrão de correspondência "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'deve ter a propriedade de padrão de correspondência "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'deve ter a propriedade requerida ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'deve passar a validação "switch" de palavra-chave, o caso ' + (e.params.caseIndex) + ' falha';
        break;
      case 'type':
        out = 'deve ser ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'não deve ter itens duplicados (os itens ## ' + (e.params.j) + ' e ' + (e.params.i) + ' são idênticos)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],11:[function(require,module,exports){
'use strict';
module.exports = function localize_ru(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'не найдена схема ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'должно иметь не более, чем ' + (n) + ' элемент';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'additionalProperties':
        out = 'не должно иметь дополнительные поля';
        break;
      case 'anyOf':
        out = 'должно соответствовать одной их схем в "anyOf"';
        break;
      case 'constant':
        out = 'должно быть равно заданному значению';
        break;
      case 'contains':
        out = 'должно содержать значение соответствующее схеме';
        break;
      case 'custom':
        out = 'должно соответствовать правилу "' + (e.keyword) + '"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'должно иметь пол';
        if (n == 1) {
          out += 'е';
        } else {
          out += 'я';
        }
        out += ' ' + (e.params.deps) + ', когда присутствует поле ' + (e.params.property);
        break;
      case 'enum':
        out = 'должно быть равен одному из значений в "enum"';
        break;
      case 'format':
        out = 'должно соответствовать формату "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum должно быть boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum должно быть boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'должно быть ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'должно быть ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'должно быть ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'должно иметь не более, чем ' + (n) + ' элемент';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'должно быть не длиннее, чем ' + (n) + ' символ';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'должно иметь не более, чем ' + (n) + ' пол';
        if (n == 1) {
          out += 'е';
        } else if (n >= 2 && n <= 4) {
          out += 'я';
        } else {
          out += 'ей';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'должно быть ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'должно иметь не менее, чем ' + (n) + ' элемент';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'должно быть не короче, чем ' + (n) + ' символ';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'должно иметь не менее, чем ' + (n) + ' пол';
        if (n == 1) {
          out += 'е';
        } else if (n >= 2 && n <= 4) {
          out += 'я';
        } else {
          out += 'ей';
        }
        break;
      case 'multipleOf':
        out = 'должно быть кратным ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'должно не соответствовать схеме в "not"';
        break;
      case 'oneOf':
        out = 'должно соответствовать в точности одной схемe в "oneOf"';
        break;
      case 'pattern':
        out = 'должно соответствовать образцу "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'должно иметь ' + (e.params.reason) + ' ' + (n) + ' пол';
        if (n == 1) {
          out += 'е';
        } else if (n >= 2 && n <= 4) {
          out += 'я';
        } else {
          out += 'ей';
        }
        out += ', соответствующих образцу "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'должно иметь поле, соответствующее образцу "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'должно иметь обязательное поле ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'должно соответствовать правилу ' + (e.params.caseIndex) + ' в "switch"';
        break;
      case 'type':
        out = 'должно быть ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'не должно иметь повторяющихся элементов (элементы ' + (e.params.j) + ' и ' + (e.params.i) + ' идентичны)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],12:[function(require,module,exports){
'use strict';
module.exports = function localize_sk(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'referenciu ' + (e.params.ref) + ' sa nepodarilo nájsť';
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'nemôže mať viac, než ' + (n) + ' prv';
        if (n == 1) {
          out += 'ok';
        } else {
          out += 'kov';
        }
        break;
      case 'additionalProperties':
        out = 'nemôže mať ďalšie položky';
        break;
      case 'anyOf':
        out = 'musí splňovať aspoň jednu zo schém v "anyOf"';
        break;
      case 'constant':
        out = 'musí byť konštanta';
        break;
      case 'contains':
        out = 'musí obsahovať prvok zodpovedajúci schéme';
        break;
      case 'custom':
        out = 'musí splniť "' + (e.keyword) + '" validáciu';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += ' musí mať polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'iek';
        } else {
          out += 'ka';
        }
        out += ': ' + (e.params.deps) + ', ak obsahuje ' + (e.params.property);
        break;
      case 'enum':
        out = 'musí byť jedna z definovaných hodnôt';
        break;
      case 'format':
        out = 'musí mať formát "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum musí byť boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum musí byť boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí byť ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí byť ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí byť ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'nesmie mať viac než ' + (n) + ' prv';
        if (n == 1) {
          out += 'ok';
        } else {
          out += 'kov';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'nesmie byť dlhší než ' + (n) + ' znak';
        if (n != 1) {
          out += 'ov';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'nesmie mať viac než ' + (n) + ' polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'iek';
        } else {
          out += 'ka';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'musí byť ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'nesmie mať menej než ' + (n) + ' prv';
        if (n == 1) {
          out += 'ok';
        } else {
          out += 'kov';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'nesmie byť kratší než ' + (n) + ' znak';
        if (n != 1) {
          out += 'ov';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'nesmie mať menej než ' + (n) + ' polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'iek';
        } else {
          out += 'ka';
        }
        break;
      case 'multipleOf':
        out = 'musí byť násobkom ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'nesmie splňovať schému v "not"';
        break;
      case 'oneOf':
        out = 'musí splňovať práve jednu schému v "oneOf"';
        break;
      case 'pattern':
        out = 'musí splňovať regulárny výraz "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'musí mať ' + (e.params.reason) + ' ' + (n) + ' polož';
        if (n >= 2 && n <= 4) {
          out += 'ky';
        } else if (n != 1) {
          out += 'iek';
        } else {
          out += 'ka';
        }
        out += ' splňjúcu regulárny výraz "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'musí mať položku splňjúcu regulárny výraz "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'musí mať požadovanú položku ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'musí prejsť validáciou "switch", prípad ' + (e.params.caseIndex) + ' je neúspešný';
        break;
      case 'type':
        out = 'musí byť ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'nesmie mať duplicitné prvky (prvky ## ' + (e.params.j) + ' a ' + (e.params.i) + ' sú rovnaké)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],13:[function(require,module,exports){
'use strict';
module.exports = function localize_sv(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'kan inte lösa referens ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'borde ha fler än ' + (n) + ' sak';
        if (n != 1) {
          out += 'er';
        }
        break;
      case 'additionalProperties':
        out = 'borde inte ha fler egenskaper';
        break;
      case 'anyOf':
        out = 'borde matcha något schema i "anyOf"';
        break;
      case 'constant':
        out = 'bör vara en konstant';
        break;
      case 'contains':
        out = 'bör innehålla ett giltigt objekt';
        break;
      case 'custom':
        out = 'bör passera "' + (e.keyword) + '" nyckelord validering';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'borde ha egenskap';
        if (n != 1) {
          out += 'er';
        }
        out += ' ' + (e.params.deps) + ' när egenskap ' + (e.params.property) + ' finns tillgängligt';
        break;
      case 'enum':
        out = 'borde vara ekvivalent med en av dess fördefinierade värden';
        break;
      case 'format':
        out = 'borde matcha formatet "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum bör vara en boolean';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMaximum bör vara en boolean';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'bör vara ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'bör vara ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'borde vara ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'borde inte ha fler än ' + (n) + ' sak';
        if (n != 1) {
          out += 'er';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'borde inte vara längre än ' + (n) + ' tecken';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'borde inte ha fler än ' + (n) + ' egenskap';
        if (n != 1) {
          out += 'er';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'borde vara ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'borde inte ha färre än ' + (n) + ' sak';
        if (n != 1) {
          out += 'er';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'borde inte vara kortare än ' + (n) + ' tecken';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'borde inte ha färre än ' + (n) + ' egenskap';
        if (n != 1) {
          out += 'er';
        }
        break;
      case 'multipleOf':
        out = 'borde vara en multipel av ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'borde inte vara giltigt enligt schema i "not"';
        break;
      case 'oneOf':
        out = 'borde matcha exakt ett schema i "oneOf"';
        break;
      case 'pattern':
        out = 'borde matcha mönstret "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'bör ha ' + (e.params.reason) + ' ' + (n) + ' egenskap';
        if (n != 1) {
          out += 'er';
        }
        out += ' som matchar mönstret "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'bör ha en egenskap som matchar mönstret "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = 'borde ha den nödvändiga egenskapen ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'bör passera "switch" nyckelord validering, fallet ' + (e.params.caseIndex) + ' misslyckas';
        break;
      case 'type':
        out = 'borde vara ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'borde inte ha duplicerade saker (sakerna ## ' + (e.params.j) + ' och ' + (e.params.i) + ' är identiska)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],14:[function(require,module,exports){
'use strict';
module.exports = function localize_zh(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = '无法找到引用' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += '不允许超过' + (n) + '个元素';
        break;
      case 'additionalProperties':
        out = '不允许有额外的属性';
        break;
      case 'anyOf':
        out = '数据应为 anyOf 所指定的其中一个';
        break;
      case 'constant':
        out = '应当等于常量';
        break;
      case 'contains':
        out = 'should contain a valid item';
        break;
      case 'custom':
        out = '应当通过 "' + (e.keyword) + ' 关键词校验"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += '应当拥有属性' + (e.params.property) + '的依赖属性' + (e.params.deps);
        break;
      case 'enum':
        out = '应当是预设定的枚举值之一';
        break;
      case 'format':
        out = '应当匹配格式 "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum 应当是布尔值';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum 应当是布尔值';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '应当是 ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '应当是 ' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '应当为 ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += '不应多于 ' + (n) + ' 个项';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += '不应多于 ' + (n) + ' 个字符';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += '不应有多于 ' + (n) + ' 个属性';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '应当为 ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += '不应少于 ' + (n) + ' 个项';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += '不应少于 ' + (n) + ' 个字符';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += '不应有少于 ' + (n) + ' 个属性';
        break;
      case 'multipleOf':
        out = '应当是 ' + (e.params.multipleOf) + ' 的整数倍';
        break;
      case 'not':
        out = '不应当匹配 "not" schema';
        break;
      case 'oneOf':
        out = '只能匹配一个 "oneOf" 中的 schema';
        break;
      case 'pattern':
        out = '应当匹配模式 "' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += '应当有 ' + (n) + ' 个 ' + (e.params.reason) + ' 属性满足模式 ' + (e.params.pattern);
        break;
      case 'patternRequired':
        out = '应当有属性匹配模式 ' + (e.params.missingPattern);
        break;
      case 'required':
        out = '应当有必需属性 ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = '由于 ' + (e.params.caseIndex) + ' 失败，未通过 "switch" 校验, ';
        break;
      case 'type':
        out = '应当是 ' + (e.params.type) + ' 类型';
        break;
      case 'uniqueItems':
        out = '不应当含有重复项 (第 ' + (e.params.j) + ' 项与第 ' + (e.params.i) + ' 项是重复的)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};

},{}],"/localize/index":[function(require,module,exports){
'use strict';

module.exports = {
    cz: require('./cz'),
    de: require('./de'),
    en: require('./en'),
    fr: require('./fr'),
    es: require('./es'),
    hu: require('./hu'),
    it: require('./it'),
    ja: require('./ja'),
    pl: require('./pl'),
    'pt-BR': require('./pt-BR'),
    ru: require('./ru'),
    sk: require('./sk'),
    sv: require('./sv'),
    zh: require('./zh')
};

},{"./cz":1,"./de":2,"./en":3,"./es":4,"./fr":5,"./hu":6,"./it":7,"./ja":8,"./pl":9,"./pt-BR":10,"./ru":11,"./sk":12,"./sv":13,"./zh":14}]},{},[]);
