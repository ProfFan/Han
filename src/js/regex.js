define([
  './core',
  './regex/unicode',
  './regex/typeset'
], function( Han, UNICODE, TYPESET ) {

Han.UNICODE = UNICODE
Han.TYPESET = TYPESET

// Aliases
Han.UNICODE.cjk      = Han.UNICODE.hanzi
Han.UNICODE.greek    = Han.UNICODE.ellinika
Han.UNICODE.cyrillic = Han.UNICODE.kirillica
Han.UNICODE.hangul   = Han.UNICODE.eonmun

Han.TYPESET.char.cjk      = Han.TYPESET.char.hanzi
Han.TYPESET.char.greek    = Han.TYPESET.char.ellinika
Han.TYPESET.char.cyrillic = Han.TYPESET.char.kirillica
Han.TYPESET.char.hangul   = Han.TYPESET.char.eonmun

return Han
})
