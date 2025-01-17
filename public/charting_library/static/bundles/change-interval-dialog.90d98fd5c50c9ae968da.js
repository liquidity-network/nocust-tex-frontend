webpackJsonp([21], {
  699: function(t, o, i) {
    'use strict'
    function e(t) {
      ;(this._options = t || {}),
        this._setInput(),
        (this._caption = $('<i class="interval-caption">').html('&nbsp;')),
        (this._helpTooltipTrigger = $(
          '<i class="help-tooltip-trigger apply-common-tooltip common-tooltip-below">',
        )
          .text('?')
          .attr(
            'title',
            $.t(
              'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
            ),
          )),
        (this._dialogTitle = $.t('Change Interval'))
    }
    function a(t) {
      var o = /[\dhdwms]/i,
        i = /[\dhdwm]/i
      return r.enabled('seconds_resolution') ? o.test(t) : i.test(t)
    }
    var n = i(62).linking,
      s = i(311).parseIntervalValue,
      l = i(311).intervalIsSupported,
      d = i(311).sanitizeIntervalValue,
      r = i(5),
      c = i(61),
      u = i(883).TVOldDialogs
    ;(e.prototype._setInput = function() {
      ;(this._input = $(
        '<input type="text" class="change-interval-input" autocomplete="off" maxlength="5">',
      )),
        this._input
          .on('keypress', this._handleInput.bind(this))
          .on(
            'input',
            function() {
              this._validate(), this._updateCaption()
            }.bind(this),
          )
          .on(
            'blur',
            function() {
              setTimeout(this._submit.bind(this), 0)
            }.bind(this),
          )
    }),
      (e.prototype._validate = function() {
        var t,
          o = this._input.val()
        ;(this._parsed = s(o)),
          (this._valid = !this._parsed.error),
          (this._supported = !this._parsed.error && l(o)),
          (t = this._parsed.unit),
          this._supported &&
            ('R' === t && this._parsed.qty > c.getMaxResolutionValue('R')
              ? (this._supported = !1)
              : (null !== t && 'H' !== t) ||
                (this._parsed.qty * ('H' === t ? 60 : 1) > 1440 && (this._supported = !1)))
      }),
      (e.prototype._updateCaption = function() {
        var t, o, i
        this._valid && this._supported
          ? ((o = this._parsed.qty || 1),
            (i = this._parsed.unit || ''),
            (t = c.getTranslatedResolutionModel(o + i).hint),
            this._input.add(this._caption).removeClass('error'))
          : ((t = this._parsed.error ? '&nbsp;' : $.t('Not applicable')),
            this._input.add(this._caption).addClass('error')),
          this._caption.html(t)
      }),
      (e.prototype._handleInput = function(t) {
        if (13 === t.which) return void this._submit()
        t.ctrlKey ||
          t.metaKey ||
          !t.charCode ||
          !t.which ||
          t.which <= 32 ||
          a(String.fromCharCode(t.charCode)) ||
          t.preventDefault()
      }),
      (e.prototype._submit = function() {
        var t, o
        u.isOpen(this._dialogTitle) &&
          (this._valid &&
            this._supported &&
            ((t = d(this._input.val())),
            (o = n.interval.value()),
            t &&
              o !== t &&
              'function' == typeof this._options.callback &&
              this._options.callback(t)),
          u.destroy(this._dialogTitle))
      }),
      (e.prototype._setInitialValue = function(t) {
        var o, i
        ;(t = t || this._options.initialValue),
          (o = ''),
          (i = !1),
          t && ',' !== t ? (o = d(t) || '') : ((t = n.interval.value()), (o = t), (i = !0)),
          this._input.val(o),
          i && this._input.select()
      }),
      (e.prototype.isValid = function() {
        return !!this._valid
      }),
      (e.prototype.show = function(t) {
        var o = u.createDialog(this._dialogTitle, {
            hideCloseCross: !0,
            addClass: 'change-interval-dialog',
            ownerDocument: this._options.ownerDocument,
          }),
          i = o.find('._tv-dialog-content')
        return (
          o.css('min-width', 0),
          i
            .css('min-width', 0)
            .mousedown(
              function(t) {
                this._input.is(t.target) || t.preventDefault()
              }.bind(this),
            )
            .append(this._input.add(this._caption).add(this._helpTooltipTrigger)),
          u.applyHandlers(o),
          u.positionDialog(o),
          this._setInitialValue(t),
          this._validate(),
          this._updateCaption(),
          o
        )
      }),
      (t.exports.ChangeIntervalDialog = e)
  },
  827: function(t, o, i) {
    'use strict'
    function e(t) {
      return t in $.fn
        ? Promise.resolve()
        : (s ||
            (s = new Promise(function(t) {
              i.e(31)
                .then(
                  function(o) {
                    i(831), t()
                  }.bind(null, i),
                )
                .catch(i.oe)
            })),
          s)
    }
    function a(t) {
      return new l(t)
    }
    var n, s, l
    Object.defineProperty(o, '__esModule', { value: !0 }),
      i.d(o, 'LazyJqueryUI', function() {
        return l
      }),
      (o.lazyJqueryUI = a),
      (n = i(14)),
      i.n(n),
      (l = (function() {
        function t(t) {
          this._$elem = t
        }
        return (
          (t.prototype.draggable = function() {
            var t = arguments,
              o = this._$elem
            return e('draggable').then(function() {
              return o.draggable.apply(o, t)
            })
          }),
          (t.prototype.resizable = function() {
            var t = arguments,
              o = this._$elem
            return e('resizable').then(function() {
              return o.resizable.apply(o, t)
            })
          }),
          (t.prototype.sortable = function() {
            var t = arguments,
              o = this._$elem
            return e('sortable').then(function() {
              return o.sortable.apply(o, t)
            })
          }),
          (t.prototype.datepicker = function() {
            var t = arguments,
              o = this._$elem
            return e('datepicker').then(function() {
              return o.datepicker.apply(o, t)
            })
          }),
          t
        )
      })())
  },
  836: function(t, o) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
  },
  845: function(t, o, i) {
    'use strict'
    function e(t) {
      var o,
        i,
        e = (t + '').match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
      return null === e
        ? 0
        : ((o = e[1] ? e[1].length : 0), (i = e[2] ? parseInt(e[2], 0) : 0), Math.max(0, o - i))
    }
    function a(t) {
      return (
        (t = Math.abs(t)),
        !Object(c.isInteger)(t) && t > 1 && (t = parseFloat(('' + t).replace(/^.+\./, '0.'))),
        0 < t && t < 1 ? Math.pow(10, e(t)) : 1
      )
    }
    function n(t, o) {
      var i, e, n, s, l, d
      t.trigger('tvticker-beforechange'),
        (i = t.data('TVTicker')),
        (e = i && i.step),
        (n = 0),
        (n = i.parser
          ? i.parser(t.val())
          : Object(c.isInteger)(e)
          ? parseInt(t.val(), 10)
          : parseFloat(t.val())),
        isNaN(n) && (n = 0),
        (s = a(e)),
        (l = Math.max(s, a(n))),
        (d = o(n, l)),
        i.formatter && (d = i.formatter(d)),
        t.val(d),
        t.change()
    }
    function s(t) {
      var o = t.data('TVTicker'),
        i = o && o.step,
        e = o && o.max
      n(t, function(t, o) {
        var a = (Math.round(t * o) + Math.round(i * o)) / o
        return void 0 !== e && null !== e && e < a && (a = t), a
      })
    }
    function l(t) {
      var o = t.data('TVTicker'),
        i = o && o.step,
        e = o && o.min
      n(t, function(t, o) {
        var a = (Math.round(t * o) - Math.round(i * o)) / o
        return void 0 !== e && null !== e && a < e && (a = t), a
      })
    }
    var d, r, c, u
    Object.defineProperty(o, '__esModule', { value: !0 }),
      (d = i(14)),
      i.n(d),
      (r = i(314)),
      i.n(r),
      (c = i(12)),
      i.n(c),
      (u = i(836)),
      i.n(u),
      ($.fn.TVTicker = function(t) {
        return (
          void 0 === t && (t = {}),
          this.each(function() {
            var o,
              i,
              e,
              a = !1,
              n = $(this),
              d = n.data('TVTicker')
            d ? (a = !0) : (d = { step: +n.data('step') || 1 }),
              'step' in t && (d.step = +t.step || d.step),
              'min' in t && (d.min = t.min),
              'max' in t && (d.max = t.max),
              'formatter' in t && (d.formatter = t.formatter),
              'parser' in t && (d.parser = t.parser),
              n.data('TVTicker', d),
              a ||
                ((o = $('<div class="tv-ticker">').appendTo(n.parent())),
                (i = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                  .html(u)
                  .appendTo(o)),
                (e = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                  .html(u)
                  .appendTo(o)),
                o.on('mousedown', function(t) {
                  t.preventDefault(), n.focus()
                }),
                i.click(function() {
                  n.is(':disabled') || s(n)
                }),
                e.click(function() {
                  n.is(':disabled') || l(n)
                }),
                n.keydown(function(t) {
                  n.is(':disabled') ||
                    (38 === t.keyCode
                      ? i.addClass('i-active')
                      : 40 === t.keyCode && e.addClass('i-active'))
                }),
                n.keyup(function(t) {
                  n.is(':disabled') ||
                    (38 === t.keyCode
                      ? (s(n), i.removeClass('i-active'))
                      : 40 === t.keyCode && (l(n), e.removeClass('i-active')))
                }),
                n.mousewheel(function(t, o) {
                  o > 0 ? i.click() : e.click()
                }))
          })
        )
      })
  },
  851: function(t, o) {},
  883: function(t, o, i) {
    'use strict'
    ;(function(o, e) {
      var a,
        n = i(50).max,
        s = i(827).lazyJqueryUI
      i(845),
        (a = {
          modalDialog: null,
          dialogs: [],
          NOTIFICATION_ANIMATION_START_OFFSET: '-33px',
          _constrainDraggableOptionsIfNeeded: function(t) {
            return o.enabled('constraint_dialogs_movement') && (t.containment = '.chart-page'), t
          },
          showNotice: function(t, o, i) {
            var n, s, l, d, r, c
            return (
              'object' == typeof o && ((i = o), (o = '')),
              (i = i || {}),
              (n = i.doNotCloseOnBgClick || !1),
              (s = i.html || ''),
              (l = i.width || '400px'),
              (d = {}),
              (d.noClose = i.noClose || null),
              (d.addClass = i.modalDialogClass || null),
              a.createModalDialog(t, d),
              (r = i.centerCaption ? 'caption-big-center' : 'caption-big'),
              a.modalDialog.find('._tv-dialog').css('width', l),
              (c = i.customButtonCaption ? i.customButtonCaption : $.t('OK')),
              a.modalDialog
                .find('._tv-dialog-content')
                .html(
                  e.render(
                    '<div class="main"><div class="{{captionClassName}} {{classSuffix}}">{{text}}' +
                      s +
                      '</div>{{^removeOkButton}}<div class="buttons"><input type="button" class="_tv-button ok" value="' +
                      c +
                      '"/></div>{{/removeOkButton}}</div>',
                    {
                      captionClassName: r,
                      classSuffix: i.classSuffix || '',
                      text: o,
                      removeOkButton: i && i.removeOkButton,
                    },
                  ),
                ),
              a.modalDialog.find('._tv-button.ok').on('click', function() {
                a.destroy(), i.onOkButtonClick && i.onOkButtonClick()
              }),
              a.positionDialog(),
              a.applyHandlers(!1, { doNotCloseOnBgClickIfShadowbox: n, beforeDestroy: i.onClose }),
              a.modalDialog
            )
          },
          showCustomDialog: function(t) {
            function o(t) {
              a.destroy(), t.preventDefault()
            }
            return (
              a.createModalDialog(t.title || $.t('Dialog'), { addClass: '' }),
              a.modalDialog.find('._tv-dialog').css('width', t.width || '400px'),
              a.modalDialog
                .find('._tv-dialog-content')
                .html('<div class="main">' + (t.html || $.t('Content')) + '</div>'),
              a.modalDialog.find('.ok').click(o),
              a.modalDialog.find('form').submit(o),
              a.modalDialog.find('.cancel').click(o),
              a.modalDialog.find('._tv-dialog-title-close').click(o),
              a.positionDialog(),
              a.applyHandlers(),
              a.modalDialog
            )
          },
          createModalDialog: function(t, o) {
            var i, e
            return (
              (o = o || {}),
              null !== a.modalDialog && a.destroy(),
              (a.modalDialog = $(
                '<div class="_tv-dialog-shadowbox"><div class="_tv-dialog _tv-dialog-modal' +
                  (o.addClass ? ' ' + o.addClass : '') +
                  '">' +
                  (o.noHeader
                    ? ''
                    : '<div class="_tv-dialog-title">' +
                      (o.noClose ? '' : '<a class="_tv-dialog-title-close"></a>') +
                      '<span class="_tv-dialog-title-text">' +
                      t +
                      '</span></div>') +
                  '<div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div></div>',
              )
                .appendTo($('body'))
                .data('title', t)),
              a._addMessageCloseButton(a.modalDialog.find('._tv-dialog-error')),
              a._addMessageCloseButton(a.modalDialog.find('._tv-dialog-message')),
              o.noShadowBox && a.modalDialog.addClass('transparent'),
              o.addClass && a.modalDialog.addClass(o.addClass),
              o.width && a.modalDialog.find('._tv-dialog').css({ width: o.width }),
              o.content && a.modalDialog.find('._tv-dialog-content').html(o.content),
              (i = $('.fancybox-overlay')),
              i.length &&
                ((e = i.css('z-index')), $('._tv-dialog-shadowbox').css('z-index', e + 1)),
              o.draggable &&
                s(a.modalDialog).draggable(
                  a._constrainDraggableOptionsIfNeeded({
                    handle: a.modalDialog.find('._tv-dialog-title'),
                  }),
                ),
              o.zIndex && a.modalDialog.css('z-index', o.zIndex),
              a.modalDialog
            )
          },
          _addMessageCloseButton: function(t) {
            var o = $(i(884)).attr({ class: 'close', title: $.t('Close message') })
            t.append(o),
              $(o).on('click', function() {
                t.animate(
                  { marginTop: a.NOTIFICATION_ANIMATION_START_OFFSET, opacity: 0 },
                  'fast',
                  function() {
                    t.hide()
                  },
                )
              })
          },
          createDialog: function(t, o) {
            var i, l, d, r
            return a.isOpen(t)
              ? ((i = a.get(t)), i.find('._tv-dialog-content').html(''), i.data('new', !1), i)
              : ((o = o || {}),
                (l = o.ownerDocument || document),
                (i = $(
                  e.render(
                    '<div class="_tv-dialog _tv-dialog-nonmodal {{&addClass}}"><div class="_tv-dialog-title{{#hideTitle}} _tv-dialog-title-hidden{{/hideTitle}}{{#hideCloseCross}} _tv-dialog-title-no-close{{/hideCloseCross}}">{{^hideTitle}} {{&title}}{{/hideTitle}}{{^hideCloseCross}}<a class="_tv-dialog-title-close"></a>{{/hideCloseCross}}</div><div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div>',
                    {
                      addClass: o.addClass || '',
                      hideTitle: o.hideTitle,
                      hideCloseCross: o.hideCloseCross,
                      title: t,
                    },
                  ),
                  l,
                ).appendTo(l.body)),
                a._addMessageCloseButton(i.find('._tv-dialog-error')),
                a._addMessageCloseButton(i.find('._tv-dialog-message')),
                o.width && i.css({ width: o.width }),
                o.content && i.find('._tv-dialog-content').html(o.content),
                (d = 0),
                (d = o.zIndex
                  ? o.zIndex
                  : a.dialogs && a.dialogs.length
                  ? n(
                      $.map(a.dialogs, function(t) {
                        return parseInt((t.dialog || t).css('z-index'), 10)
                      }),
                    ) + 1
                  : 110),
                i.css('z-index', d),
                i.data('new', !0),
                i.data('title', t),
                i.data('id', a.dialogs.length + 1),
                a.dialogs.push({ title: t, dialog: i, id: a.dialogs.length + 1 }),
                (r = {
                  start: function(t, o) {
                    var i,
                      e,
                      n = o.helper.css('z-index'),
                      s = 0,
                      l = null
                    for (i = 0; i < a.dialogs.length; i++)
                      (e = a.dialogs[i].dialog.css('z-index')) > s &&
                        ((s = e), (l = a.dialogs[i].dialog))
                    o.helper.css('z-index', s), l.css('z-index', n)
                  },
                }),
                o.dragHandle
                  ? (r.handle = o.dragHandle)
                  : o.hideTitle || (r.handle = '._tv-dialog-title'),
                o.dragOptions && $.extend(r, o.dragOptions),
                s(i).draggable(a._constrainDraggableOptionsIfNeeded(r)),
                i)
          },
          positionDialog: function(t, o, i) {
            function e() {
              n.css('margin-left', -Math.round(n.outerWidth() / 2) + 'px'),
                n.css('margin-top', -Math.round(n.outerHeight() / 2) + 'px')
            }
            var n, s, l, d, r, c, u, p, g, h
            ;(i = i || {}),
              (o = o || i.position),
              t
                ? ((s = t.prop('ownerDocument')),
                  (l = s.defaultView),
                  (d = t.width()),
                  (r = t.height()),
                  (c = $(l).width()),
                  (u = $(l).height()),
                  o && o.top && o.left
                    ? ((g = i.forcePosition
                        ? o.left
                        : Math.max(2, Math.min(c - d - 4, o.left)) + 'px'),
                      (p = i.forcePosition
                        ? o.top
                        : Math.max(2, Math.min(u - r - 4, o.top)) + 'px'))
                    : o && o.considerScroll
                    ? ((h = $(s)),
                      (g = Math.round((c - d) / 2 + h.scrollLeft()) + 'px'),
                      (p = Math.round((u - r) / 2 + h.scrollTop()) + 'px'))
                    : ((g = Math.round((c - d) / 2) + 'px'), (p = Math.round((u - r) / 2) + 'px')),
                  i.fadeIn
                    ? t
                        .css({ left: g, top: p })
                        .hide()
                        .fadeIn('fast')
                    : i.smooth
                    ? t.animate({ left: g, top: p })
                    : t.css({ left: g, top: p }))
                : ((t = a.modalDialog), (n = t.find('._tv-dialog')), e(), n.resize(e))
          },
          applyHandlers: function(t, o) {
            var i,
              e,
              n,
              s = !t || t === this.modalDialog
            ;(o = o || {}),
              (i = s
                ? function() {
                    a.destroy()
                  }
                : function() {
                    a.destroy(t.data('title'))
                  }),
              (t = t || a.modalDialog.find('._tv-dialog')),
              (e = t.prop('ownerDocument')),
              o.beforeDestroy && t.on('destroy', o.beforeDestroy),
              t
                .find('._tv-dialog-title ._tv-dialog-title-close, .js-dialog-close')
                .on('click', function(t) {
                  o.closeHandler && 'function' == typeof o.closeHandler ? o.closeHandler(t) : i()
                }),
              o.doNotCloseOnBgClick ||
                setTimeout(function() {
                  $(e).on('mousedown.closeDialog', function(a) {
                    var n = $(a.target)
                      .parents()
                      .andSelf()
                    n.is(t) ||
                      (o.doNotCloseOnBgClickIfShadowbox &&
                        n.is('._tv-dialog-shadowbox, .tv-dialog__modal-wrap')) ||
                      n.is(
                        '.colorpicker, .charts-popup-list, ._tv-dialog, .tvcolorpicker-popup, .symbol-edit-popup, .ui-datepicker, .clockpicker-popover, .pac-container',
                      ) ||
                      ($(e).off('mousedown.closeDialog'), i())
                  })
                }, 0),
              t.find('input[type="checkbox"]').change(function() {
                var t = $(this)
                t.next('._tv-dialog-checkbox-mask')
                  .toggleClass('disabled', t.prop('disabled'))
                  .toggleClass('_tv-dialog-checkbox-mask-active', t.is(':checked'))
              }),
              (n = t
                .find('input[type="text"]')
                .focus(function() {
                  $(this).addClass('_tv-dialog-content-textactive')
                })
                .blur(function() {
                  $(this).removeClass('_tv-dialog-content-textactive')
                })
                .first()),
              Modernizr.touch || o.notFocusFirst || n.focus(),
              t
                .find('input[type="password"]')
                .focus(function() {
                  $(this).addClass('_tv-dialog-content-textactive')
                })
                .blur(function() {
                  $(this).removeClass('_tv-dialog-content-textactive')
                }),
              t
                .find('textarea')
                .focus(function() {
                  $(this).addClass('_tv-dialog-content-textareaactive')
                })
                .blur(function() {
                  $(this).removeClass('_tv-dialog-content-textareaactive')
                }),
              t.find('._tv-dialog-checkbox-mask').click(function() {
                var t = $(this).prev()
                t.prop('disabled') || (t.prop('checked', !t[0].checked), t.change())
              }),
              o.doNotCloseOnEsc ||
                $(e).bind('keyup.hideDialog', function(o) {
                  if (27 === o.keyCode) return t ? a.destroy(t.data('title')) : a.destroy(), !1
                }),
              o.processEnterButton &&
                $(e).bind('keyup.confirmAndCloseDialog', function(t) {
                  13 === t.keyCode &&
                    'textarea' !== t.target.tagName.toLowerCase() &&
                    (o.processEnterButton.click(), $(e).unbind('keyup.confirmAndCloseDialog'))
                })
          },
          showError: function(t, o, i) {
            a.showMessage(t, o, $.extend(i || {}, { isError: !0 }))
          },
          showMessage: function(t, o, i) {
            var e, n, s
            o || (o = $('._tv-dialog')),
              (i = i || {}),
              (e = (i.isError && '_tv-dialog-error') || '_tv-dialog-message'),
              (n = o.find('.' + e)),
              (s = n.find('.message')),
              i.html ? s.html('string' == typeof i.html ? i.html : t) : s.text(t),
              s.css('width', o.width()).toggleClass('selectable', !!i.selectable),
              n
                .toggleClass('with-close', !!i.withClose)
                .css({ marginTop: a.NOTIFICATION_ANIMATION_START_OFFSET, opacity: '0' })
                .show()
                .animate({ marginTop: 0, opacity: 1 }, 'fast'),
              i.withClose ||
                (i.hideWithoutAnimation
                  ? n.on('touchstartoutside mousedownoutside keydownoutside', function t() {
                      n.hide(), n.off('touchstartoutside mousedownoutside keydownoutside', t)
                    })
                  : n.on('touchstartoutside mousedownoutside keydownoutside', function t() {
                      n.animate(
                        { marginTop: a.NOTIFICATION_ANIMATION_START_OFFSET, opacity: 0 },
                        'fast',
                        function() {
                          n.hide()
                        },
                      ),
                        n.off('touchstartoutside mousedownoutside keydownoutside', t)
                    }))
          },
          isOpen: function(t) {
            for (var o = 0; o < a.dialogs.length; o++) if (a.dialogs[o].title === t) return !0
            return !1
          },
          get: function(t) {
            for (var o = 0; o < a.dialogs.length; o++)
              if (a.dialogs[o].title === t) return a.dialogs[o].dialog
          },
          destroy: function(t, o) {
            var i,
              e = null
            if (t && 'string' == typeof t)
              for (i = 0; i < a.dialogs.length; i++)
                a.dialogs[i].title === t &&
                  ((e = a.dialogs[i].dialog.prop('ownerDocument')),
                  a.dialogs[i].dialog.find('.apply-common-tooltip').mouseout(),
                  a.dialogs[i].dialog.trigger('destroy', o),
                  $(document).unbind('mouseup.hideDialog' + a.dialogs[i].id),
                  $('input', a.dialogs[i].dialog).blur(),
                  a.dialogs[i].dialog.remove(),
                  a.dialogs.splice(i, 1))
            else
              a.modalDialog &&
                ((e = a.modalDialog.prop('ownerDocument')),
                a.modalDialog.find('.apply-common-tooltip').mouseout(),
                a.modalDialog.find('._tv-dialog').trigger('destroy'),
                a.modalDialog.remove(),
                (a.modalDialog = null))
            $(e).unbind('keyup.hideDialog'), $(e).unbind('keyup.confirmAndCloseDialog')
          },
          resizeContent: function(t, o, i) {
            var e, a
            null == i && (i = 20),
              (t += i),
              (e = parseInt($('body').height(), 10)),
              (a = o.height()),
              t > e && ((a -= t - e), (a = Math.max(0, a)), o.height(a))
          },
        }),
        (t.exports.TVOldDialogs = a)
    }.call(o, i(5), i(126)))
  },
  884: function(t, o) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9px" height="9px"><path d="M2 1L1 2l2.5 2.5L1 7l1 1 2.5-2.5L7 8l1-1-2.5-2.5L8 2 7 1 4.5 3.5z"/></svg>'
  },
})
