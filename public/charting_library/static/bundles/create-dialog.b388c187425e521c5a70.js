webpackJsonp([2], {
  188: function(t, e, o) {
    'use strict'
    function i(t) {
      var e = t.type || 'popup'
      return delete t.type, 'modal' === e ? new n.TVModal(t) : new s.TVPopup(t)
    }
    var n, s
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (n = o(837)),
      (s = o(843)),
      (e.createDialog = i)
  },
  690: function(t, e, o) {
    'use strict'
    var i
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (i = o(839)),
      o.n(i),
      o.o(i, 'TVDialogAbstract') &&
        o.d(e, 'TVDialogAbstract', function() {
          return i.TVDialogAbstract
        }),
      o.o(i, 'closeAllDialogs') &&
        o.d(e, 'closeAllDialogs', function() {
          return i.closeAllDialogs
        })
  },
  827: function(t, e, o) {
    'use strict'
    function i(t) {
      return t in $.fn
        ? Promise.resolve()
        : (r ||
            (r = new Promise(function(t) {
              o.e(31)
                .then(
                  function(e) {
                    o(831), t()
                  }.bind(null, o),
                )
                .catch(o.oe)
            })),
          r)
    }
    function n(t) {
      return new a(t)
    }
    var s, r, a
    Object.defineProperty(e, '__esModule', { value: !0 }),
      o.d(e, 'LazyJqueryUI', function() {
        return a
      }),
      (e.lazyJqueryUI = n),
      (s = o(14)),
      o.n(s),
      (a = (function() {
        function t(t) {
          this._$elem = t
        }
        return (
          (t.prototype.draggable = function() {
            var t = arguments,
              e = this._$elem
            return i('draggable').then(function() {
              return e.draggable.apply(e, t)
            })
          }),
          (t.prototype.resizable = function() {
            var t = arguments,
              e = this._$elem
            return i('resizable').then(function() {
              return e.resizable.apply(e, t)
            })
          }),
          (t.prototype.sortable = function() {
            var t = arguments,
              e = this._$elem
            return i('sortable').then(function() {
              return e.sortable.apply(e, t)
            })
          }),
          (t.prototype.datepicker = function() {
            var t = arguments,
              e = this._$elem
            return i('datepicker').then(function() {
              return e.datepicker.apply(e, t)
            })
          }),
          t
        )
      })())
  },
  828: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path d="M5.182 6.596l-3.889-3.889-.707-.707 1.414-1.414.707.707 3.889 3.889 3.889-3.889.707-.707 1.414 1.414-.707.707-3.889 3.889 3.889 3.889.707.707-1.414 1.414-.707-.707-3.889-3.889-3.889 3.889-.707.707-1.414-1.414.707-.707 3.889-3.889z"/></svg>'
  },
  832: function(t, e, o) {
    'use strict'
    ;(function(i) {
      function n(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function s() {
        var t,
          e,
          o = h.width()
        for (u.width = o, u.height = h.height(), t = 0; t < p.length; t++)
          if (o <= u.breakpoints[p[t]]) {
            u.device !== p[t] &&
              ((e = u.device), (u.device = p[t]), u.trigger('changeDevice', [p[t], e]))
            break
          }
        return u
      }
      var r, a, l, c, h, d, u, p
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (r = o(301)),
        (a = n(r)),
        (l = o(838)),
        (c = $('body')),
        (h = $(window)),
        (d = 0),
        (u = {
          width: null,
          height: null,
          device: null,
          checkDevice: s,
          isMobileSafari:
            !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ||
            !!navigator.userAgent.match('CriOS'),
          getScrollbarWidth: (function() {
            var t = void 0
            return function() {
              var e, o, i, n
              return (
                void 0 === t &&
                  ((e = document.createElement('div')),
                  (e.style.visibility = 'hidden'),
                  (e.style.width = '100px'),
                  (e.style.msOverflowStyle = 'scrollbar'),
                  document.body.appendChild(e),
                  (o = e.offsetWidth),
                  (e.style.overflow = 'scroll'),
                  (i = document.createElement('div')),
                  (i.style.width = '100%'),
                  e.appendChild(i),
                  (n = i.offsetWidth),
                  e.parentNode.removeChild(e),
                  (t = o - n)),
                t
              )
            }
          })(),
          hasScroll: function(t) {
            return t.get(0).scrollHeight > t.height()
          },
          breakpoints: l.breakpoints,
          widgetbarBreakpoint: 1064,
          setFixedBodyState: function(t) {
            var e, o
            t && 1 == ++d
              ? ('hidden' !==
                  $(document.body)
                    .css('overflow')
                    .toLowerCase() &&
                  document.body.scrollHeight > document.body.offsetHeight &&
                  ($('.widgetbar-wrap').css('right', u.getScrollbarWidth()),
                  c
                    .css(
                      'padding-right',
                      parseInt(c.css('padding-right').replace('px', '')) +
                        u.getScrollbarWidth() +
                        'px',
                    )
                    .data('wasScroll', !0)),
                c.addClass('i-no-scroll'))
              : !t &&
                d > 0 &&
                0 == --d &&
                (c.removeClass('i-no-scroll'),
                c.data('wasScroll') &&
                  ((e = c.get(0)),
                  $('.widgetbar-wrap').css('right', 0),
                  (o = $('.widgetbar-wrap').width() || 0),
                  e.scrollHeight <= e.clientHeight && (o -= u.getScrollbarWidth()),
                  c.css('padding-right', (o < 0 ? 0 : o) + 'px').data('wasScroll', void 0)))
          },
        }),
        (p = Object.keys(u.breakpoints).sort(function(t, e) {
          return u.breakpoints[t] - u.breakpoints[e]
        })),
        i.extend(u, a.default.prototype),
        s(),
        $(s),
        h.on('resize', s),
        (e.default = u),
        (t.exports = e.default)
    }.call(e, o(187)))
  },
  833: function(t, e, o) {
    'use strict'
    ;(function(t) {
      function i(e, o, i) {
        var n,
          s,
          r,
          a,
          l,
          c,
          h = this
        if (
          ((this._options = $.extend({}, this._defaultOptions, i || {})),
          (this._$wrapper = e),
          (this._$content = o),
          (this._scroll_speed = 40),
          (this._shadow_offset = 10),
          (this._header_height = this._options.headerHeight),
          (this._scroll_margin_top = this._options.scrollMarginTop),
          (this.scrolled = new t()),
          (this.scrolltoend = new t()),
          (this.scrolltostart = new t()),
          (this.visibilityCallbacks = []),
          (n = navigator.platform.toLowerCase()),
          (s = navigator.userAgent.toLowerCase()),
          (r = s.indexOf('firefox') > -1),
          (a = n.indexOf('android') > -1 || s.indexOf('android') > -1),
          (this._touch = Modernizr.touch || navigator.msMaxTouchPoints || (r && a)),
          this._touch)
        )
          return (
            this._$content.css('position', 'relative'),
            void this._$wrapper
              .css({
                'overflow-y': 'auto',
                '-webkit-overflow-scrolling': 'touch',
                '-ms-overflow-style': '-ms-autohiding-scrollbar',
              })
              .scroll(this._onScroll.bind(this))
          )
        this._$wrapper.css('overflow', 'hidden'),
          this._$wrapper
            .on('mouseenter.sidebar-scroll', function() {
              h._bottomFixed ||
                h._dragging ||
                (h._options.alwaysVisible || h._$scrollBar.addClass('active'), h._onScroll())
            })
            .on('mouseleave.sidebar-scroll', function() {
              h._bottomFixed ||
                h._dragging ||
                (h._options.alwaysVisible || h._$scrollBar.removeClass('active'), h._onScroll())
            })
            .on('mousewheel.sidebar-scroll', function(t, e) {
              if (!t.isDefaultPrevented())
                return h.scroll(e, 'MozMousePixelScroll' === t.originalEvent.type ? 2 : null)
            }),
          !1 !== this._options.showTopShadow &&
            (this._$shadowTop = $('<div class="sb-inner-shadow top i-invisible">').appendTo(
              this._$wrapper,
            )),
          !1 !== this._options.showBottomShadow &&
            (this._$shadowBottom = $('<div class="sb-inner-shadow">').appendTo(this._$wrapper)),
          this._$shadowTop &&
            this._header_height &&
            this._$shadowTop.css('top', this._header_height - this._shadow_offset),
          (l = this._options.additionalClass ? ' ' + this._options.additionalClass : ''),
          (c = this._options.alwaysVisible ? ' active-always' : ''),
          (this._$scrollBarWrapper = $('<div class="sb-scrollbar-wrap">').appendTo(this._$wrapper)),
          (this._$scrollBar = $(
            '<div class="sb-scrollbar sb-scrollbar-body' + l + c + '"></div>',
          ).appendTo(this._$scrollBarWrapper)),
          this._onScroll()
      }
      var n = o(827).lazyJqueryUI
      ;(i.prototype.isTouch = function() {
        return this._touch
      }),
        (i.prototype.getScrollBar = function() {
          return this._$scrollBar
        }),
        (i.prototype._defaultOptions = {
          headerHeight: 0,
          additionalClass: '',
          alwaysVisible: !1,
          showBottomShadow: !0,
          scrollMarginTop: 1,
          bubbleScrollEvent: !1,
        }),
        (i.prototype.initDraggable = function() {
          if (this._dragInitialized) return this
          var t = this
          return (
            n(this._$scrollBar).draggable({
              axis: 'y',
              containment: this._$scrollBarWrapper,
              start: function() {
                t._dragging = !0
              },
              stop: function() {
                t._dragging = !1
              },
              drag: function(e, o) {
                t.updateScroll()
              },
            }),
            (this._dragInitialized = !0),
            this
          )
        }),
        (i.prototype.updateScroll = function() {
          var t, e, o, i, n
          return this._touch
            ? this
            : ((t = 1),
              (e = Math.ceil(
                this._$scrollBar.position().top - this._scroll_margin_top - this._header_height,
              )),
              (o = this.getContainerHeightWithoutHeader()),
              (i = this._$content.outerHeight()),
              (n = i - o - t),
              o <= 0
                ? this
                : ((this._scroll_target_top =
                    n <= 0
                      ? this._header_height
                      : Math.min((-e * i) / o + this._header_height, this._header_height)),
                  e + this._$scrollBar.height() + 2 >= o
                    ? this.scrollToEnd()
                    : (this._$content.css('top', this._scroll_target_top + 'px'), this._onScroll()),
                  this))
        }),
        (i.prototype.getContainerHeightWithoutHeader = function() {
          return this._$wrapper[0].getBoundingClientRect().height - this._header_height
        }),
        (i.prototype.getContainerHeight = function() {
          return this._$wrapper[0].getBoundingClientRect().height
        }),
        (i.prototype.getContentHeight = function() {
          return this._$content[0].getBoundingClientRect().height
        }),
        (i.prototype.updateScrollBar = function() {
          var t, e, o, i, n, s, r, a, l
          return this._touch
            ? this
            : ((t = 1),
              (e = this._$content.position().top),
              (o = this.getContentHeight()),
              (i = this.getContainerHeight()),
              (n = this.getContainerHeightWithoutHeader()),
              (s = t + this._header_height),
              (r = n - 2 * t),
              (a = ((Math.abs(e) - this._header_height) * r) / o),
              (l = (i * i) / o),
              this.isContentShort()
                ? (this._$scrollBar.addClass('js-hidden'),
                  this._$wrapper.removeClass('sb-scroll-active'))
                : (this._$scrollBar
                    .removeClass('js-hidden')
                    .height(l)
                    .css('top', s + a),
                  this._$wrapper.addClass('sb-scroll-active'),
                  this.initDraggable()),
              this)
        }),
        (i.prototype.scroll = function(t, e) {
          var o, i, n, s, r
          return this._touch
            ? this
            : ((o = this._$content.position().top),
              (i = this._$content.outerHeight()),
              (n = this.getContainerHeightWithoutHeader()),
              (s = i - n - 1),
              (r = e || this._scroll_speed),
              s <= 0 ||
                ((this._scroll_target_top = Math.max(
                  -s + this._header_height,
                  Math.min(this._header_height, o + t * r),
                )),
                this.setContentTop(this._scroll_target_top),
                this._onScroll()))
        }),
        (i.prototype.animateTo = function(t) {
          var e, o, i
          return this._touch
            ? this
            : ((e = this._$content.outerHeight()),
              (o = this.getContainerHeightWithoutHeader()),
              (i = e - o - 1) <= 0 ||
                ((this._scroll_target_top = Math.max(
                  -i + this._header_height,
                  Math.min(this._header_height, -t),
                )),
                void this._$content.animate(
                  { top: this._scroll_target_top },
                  500,
                  function() {
                    this._onScroll()
                  }.bind(this),
                )))
        }),
        (i.prototype.resize = function() {
          var t, e
          if (!this._bottomFixed) {
            if (
              ((t = this._$content.outerHeight()),
              (e = this._$wrapper.outerHeight()),
              !this._options.vAlignBottom && t < e)
            )
              return void (this.atStart() || this.scrollToStart())
            this.atEnd()
              ? this.scrollToEnd()
              : 'number' == typeof this._stickyBottom &&
                this.setContentTop(
                  Math.min(
                    0,
                    this._stickyBottom +
                      this._$wrapper.outerHeight() -
                      this._$content.outerHeight(),
                  ),
                )
          }
        }),
        (i.prototype.resizeHeader = function(t) {
          var e = t - this._header_height
          ;(this._header_height = t),
            (this._scroll_target_top += e),
            this._$shadowTop &&
              this._$shadowTop.css('top', this._header_height - this._shadow_offset),
            this.resize()
        }),
        (i.prototype.scrollTo = function(t, e) {
          var o, i, n, s, r, a
          if (
            ((e = $.extend(
              { position: 'visible', areaHeight: t instanceof $ ? t.height() : 0 },
              e,
            )),
            t instanceof $ && (t = e.offsetTop || t.position().top),
            (o = this._$content.position().top),
            (i = this._$content.outerHeight()),
            (n = this.getContainerHeightWithoutHeader()),
            i - n - 1 <= 0)
          )
            return !0
          if (
            ((s = -1 * (o - this._header_height)), (r = s + n), (a = 0), 'visible' === e.position)
          ) {
            if (t > s && t + e.areaHeight < r) return !1
            a = t + e.areaHeight > r ? r - t - e.areaHeight : s - t
          } else 'top' === e.position && (a = s - t)
          return this.scroll(a, 1), this._onScroll(), !1
        }),
        (i.prototype.scrollToEnd = function() {
          var t = this._$content.position().top,
            e = this._$content.outerHeight(),
            o = this._$wrapper.outerHeight(),
            i = e + t
          return this.setContentTop(t + (o - i) + 1), this._onScroll(), this
        }),
        (i.prototype.scrollToStart = function() {
          return this.setContentTop(this._header_height), this._onScroll(), this
        }),
        (i.prototype.currentPosition = function() {
          return Math.round(this._$content.position().top)
        }),
        (i.prototype.atStart = function() {
          return Math.round(this._$content.position().top) >= this._header_height
        }),
        (i.prototype.atEnd = function(t) {
          var e, o, i, n
          return (
            ('number' == typeof t && isFinite(t)) || (t = 0),
            (e = 1),
            (o = Math.round(this._$content.position().top)),
            (i = this._$content.outerHeight()),
            (n = this._$wrapper.outerHeight()),
            i - Math.abs(o) - e <= n + t
          )
        }),
        (i.prototype._onScroll = function(t) {
          var e, o
          return (
            this._touch || this._$content.css('bottom', 'auto'),
            this.scrolled.fire(),
            (this._dragging && !0 !== t) || this.updateScrollBar(),
            (e = this.atStart()),
            (o = this.atEnd()),
            this._$shadowTop && this._$shadowTop.toggleClass('i-invisible', !!e),
            this._$shadowBottom && this._$shadowBottom.toggleClass('i-invisible', !!o),
            this._onContentVisible(),
            !this._atStart && e
              ? ((this._atStart = !0), this.scrolltostart.fire())
              : this._atStart && !e && delete this._atStart,
            !this._atEnd && o
              ? ((this._atEnd = !0), this.scrolltoend.fire())
              : this._atEnd && !o && delete this._atEnd,
            this._options.vAlignBottom &&
              (this._stickyBottom =
                this._$content.outerHeight() -
                Math.abs(this._$content.position().top) -
                this._$wrapper.outerHeight()),
            !(
              (!this._atStart && !this._atEnd) ||
              ('function' == typeof this._options.bubbleScrollEvent
                ? !this._options.bubbleScrollEvent()
                : !this._options.bubbleScrollEvent)
            )
          )
        }),
        (i.prototype.checkContentVisibility = function() {
          this._onContentVisible()
        }),
        (i.prototype.subscribeToContentVisible = function(t, e, o) {
          this.visibilityCallbacks.push({ id: t, $el: e, callback: o })
        }),
        (i.prototype.triggerVisibilityCallbacks = function(t) {
          this._onContentVisible(t)
        }),
        (i.prototype._contentIsVisible = function(t) {
          return t.$el.position().top > -1 * this.currentPosition()
        }),
        (i.prototype._onContentVisible = function(t) {
          var e, o, i
          this.visibilityCallbacks.length &&
            ((e = t || this._contentIsVisible.bind(this)),
            (o = []),
            (i = this.visibilityCallbacks.filter(function(t, i) {
              if (!$.contains(this._$content, t.$el[0])) return !1
              var n = e(t)
              return n && o.push(i), !n
            }, this)),
            o.forEach(function(e) {
              this.visibilityCallbacks[e].callback(!!t)
            }, this),
            delete this.visibilityCallbacks,
            (this.visibilityCallbacks = i))
        }),
        (i.prototype.save = function() {
          return (
            (this._saved = {
              top: this._$content.position().top,
              height: this._$content.outerHeight(),
            }),
            this
          )
        }),
        (i.prototype.restore = function() {
          if (this._saved) {
            if (
              this._saved.top === this._$content.position().top &&
              this._saved.height === this._$content.outerHeight()
            )
              return delete this._saved, this
            this._options.vAlignBottom &&
              ((this._saved.top -= this._$content.outerHeight() - this._saved.height),
              this._saved.top > this._header_height && (this._saved.top = this._header_height)),
              this.setContentTop(this._saved.top),
              delete this._saved,
              this._onScroll(!0)
          }
          return this
        }),
        (i.prototype.fixBottom = function() {
          var t, e
          return this._bottomFixed
            ? this
            : (this._touch
                ? ((t = this._$content.outerHeight()),
                  (e = this._$wrapper.scrollTop()),
                  (this._tempIntervalID = setInterval(
                    function() {
                      this._$wrapper.scrollTop(e + (this._$content.outerHeight() - t))
                    }.bind(this),
                    0,
                  )))
                : this._$content.css({
                    top: 'auto',
                    bottom:
                      this._$wrapper.outerHeight() -
                      this._$content.position().top -
                      this._$content.outerHeight(),
                  }),
              (this._bottomFixed = !0),
              this)
        }),
        (i.prototype.releaseBottom = function() {
          return this._bottomFixed
            ? (this._touch
                ? clearInterval(this._tempIntervalID)
                : this._$content.css({ top: this._$content.position().top, bottom: 'auto' }),
              delete this._bottomFixed,
              this._onScroll(),
              this)
            : this
        }),
        (i.prototype.setContentTop = function(t) {
          return (
            this._touch
              ? this._options.vAlignBottom &&
                this._$content.outerHeight() < this._$wrapper.outerHeight()
                ? (this._$wrapper.css('overflow-y', 'visible'),
                  this._$content.css({ position: 'absolute', bottom: 0 }))
                : (this._$content.css({ position: 'relative', bottom: 'auto' }),
                  this._$wrapper.css('overflow-y', 'auto'),
                  this._$wrapper.scrollTop(-t))
              : this._$content.css('top', t),
            this
          )
        }),
        (i.prototype.isContentShort = function() {
          return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
        }),
        (i.prototype.destroy = function() {
          this._$scrollBarWrapper.remove(),
            this._$shadowBottom && this._$shadowBottom.remove(),
            this._$shadowTop && this._$shadowTop.remove(),
            this._$wrapper
              .attr('style', '')
              .off('mouseenter.sidebar-scroll')
              .off('mouseleave.sidebar-scroll')
              .off('mousewheel.sidebar-scroll'),
            this._$content.attr('style', '')
        }),
        (e.SidebarCustomScroll = i)
    }.call(e, o(8)))
  },
  834: function(t, e) {},
  837: function(t, e, o) {
    'use strict'
    ;(function(t) {
      function i(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function n(t) {
        var e, o
        if (t && t.__esModule) return t
        if (((e = {}), null != t))
          for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        return (e.default = t), e
      }
      function s(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function a(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
      }
      function l() {
        return 0 !== w.length
      }
      var c, h, d, u, p, f, g, _, v, b, y, m, w, C
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TVModal = void 0),
        (c =
          Object.assign ||
          function(t) {
            var e, o, i
            for (e = 1; e < arguments.length; e++) {
              o = arguments[e]
              for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i])
            }
            return t
          }),
        (h = (function() {
          function t(t, e) {
            var o, i
            for (o = 0; o < e.length; o++)
              (i = e[o]),
                (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
          }
          return function(e, o, i) {
            return o && t(e.prototype, o), i && t(e, i), e
          }
        })()),
        (e.isOpenedModals = l),
        (d = o(184)),
        (u = n(d)),
        (p = o(832)),
        (f = i(p)),
        (g = o(690)),
        (_ = o(305)),
        (v = o(189)),
        (b = n(v)),
        (y = o(307)),
        (m = n(y)),
        (w = []),
        (C = {
          ajax: {},
          closingDuration: u.dur / 2,
          overlayTemplate: '<div class="tv-dialog__overlay"></div>',
          containerTemplate:
            '<div class="tv-dialog__modal-wrap"><div class="tv-dialog__modal-container"><div class="tv-dialog__modal-body"></div></div></div>',
          ajaxErrorTemplate:
            '<div class="tv-dialog__error js-dialog__close">' + $.t('Error') + '</div>',
        }),
        (e.TVModal = (function(e) {
          function o() {
            var t,
              e,
              i,
              n,
              a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return (
              s(this, o),
              (t = r(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, c({}, C, a)))),
              (t.$overlay = $(t.options.overlayTemplate)),
              (t.$modalWrap = $(t.options.containerTemplate)),
              (t.$body = t.$modalWrap.find('.tv-dialog__modal-body').append(t.$el)),
              t.options.closeOnOutsideClick &&
                t.$overlay.add(t.$modalWrap).click(function(e) {
                  t.isEventOut(e) && t.close()
                }),
              t.on('change:zIndex', function() {
                t.$overlay.css('z-index', t.zIndex), t.$modalWrap.css('z-index', t.zIndex)
              }),
              t.on('destroy', function() {
                var e = function() {
                  t.$overlay.remove(), t.$modalWrap.remove()
                }
                t.opened ? (t.close(), setTimeout(e, t.options.closingDuration)) : e()
              }),
              t.on('beforeOpen', function() {
                w.push(t)
              }),
              t.options.ajax.url &&
                ((e = t.options.ajax.beforeSend || $.noop),
                (i = t.options.ajax.success || !1),
                (n = t.options.ajax.error || $.noop),
                $.extend(t.options.ajax, {
                  beforeSend: function() {
                    t.trigger('beforeLoading', [t]), t.startSpinner(), e(t)
                  },
                  success: function(e) {
                    t.trigger('afterLoading', [t]),
                      t.renderContent(i ? i(t, e) : e).showContent(),
                      t.trigger('afterLoadingShow', [t])
                  },
                  error: function() {
                    t.renderContent(t.options.ajaxErrorTemplate),
                      n(t),
                      t.trigger('errorLoading', [t])
                  },
                })),
              t.on('error', function(e, o) {
                t.$modalWrap[0].getBoundingClientRect().height <
                  t.$content[0].getBoundingClientRect().height &&
                  o.addClass('i-fixed').css({ width: t.$el.width() })
              }),
              (t._shortCutsLockId = null),
              (t._keyboardBinderLockId = null),
              t
            )
          }
          return (
            a(o, e),
            h(o, [
              {
                key: 'open',
                value: function() {
                  var t,
                    e = this
                  if (!this.opened)
                    return (
                      (this.opened = !0),
                      (this._shortCutsLockId = b.disable()),
                      (this._keyboardBinderLockId = m.disable()),
                      f.default.setFixedBodyState(!0),
                      (t = function() {
                        e.focus(),
                          e.toTop(),
                          $('body')
                            .append(
                              e.$overlay.addClass('i-hidden i-closed').css('z-index', e.zIndex),
                            )
                            .append(
                              e.$modalWrap.addClass('i-hidden i-closed').css('z-index', e.zIndex),
                            ),
                          e.trigger('beforeOpen', [e]),
                          e.$overlay.removeClass('i-hidden'),
                          setTimeout(function() {
                            e.$overlay.removeClass('i-closed')
                          }, 20),
                          e.options.ajax.url
                            ? (e.ajaxRequest = $.ajax(e.options.ajax))
                            : e.showContent()
                      }),
                      f.default.isMobileSafari
                        ? setTimeout(function() {
                            return t()
                          }, 50)
                        : t(),
                      this
                    )
                },
              },
              {
                key: 'close',
                value: function() {
                  var e = this
                  if (this.opened)
                    return (
                      (this.opened = !1),
                      this._shortCutsLockId && b.enable(this._shortCutsLockId),
                      this._keyboardBinderLockId && m.enable(this._keyboardBinderLockId),
                      this.trigger('beforeClose', [this]),
                      this.ajaxRequest && (this.ajaxRequest.abort(), delete this.ajaxRequest),
                      this.hideContent(),
                      this.$overlay.addClass('i-closed'),
                      setTimeout(function() {
                        e.$modalWrap.addClass('i-hidden').detach(),
                          e.$overlay.addClass('i-hidden').detach(),
                          (w = t.without(w, e)),
                          f.default.setFixedBodyState(!1),
                          e.trigger('afterClose', [e]),
                          e.unfocus(),
                          w.length > 0 && w[w.length - 1].focus(),
                          e.options.destroyOnClose && e.destroy()
                      }, this.options.closingDuration),
                      this
                    )
                },
              },
              {
                key: 'showContent',
                value: function() {
                  var t = this
                  return (
                    this.$modalWrap.removeClass('i-hidden'),
                    setTimeout(function() {
                      t.$modalWrap.removeClass('i-closed')
                    }, 20),
                    setTimeout(function() {
                      t.trigger('afterOpen', [t]), t.spinner && t.stopSpinner()
                    }, 0.75 * u.dur + 20),
                    this
                  )
                },
              },
              {
                key: 'hideContent',
                value: function() {
                  if (this.$el) return this.$modalWrap.addClass('i-closed'), this.unfocus(), this
                },
              },
              {
                key: 'startSpinner',
                value: function() {
                  return (
                    (this.spinner = new _.Spinner('large')),
                    this.spinner.spin(this.$overlay[0]),
                    this
                  )
                },
              },
              {
                key: 'stopSpinner',
                value: function() {
                  if (this.spinner) return this.spinner.stop(), delete this.spinner, this
                },
              },
            ]),
            o
          )
        })(g.TVDialogAbstract))
    }.call(e, o(187)))
  },
  838: function(t, e, o) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      o.d(e, 'breakpoints', function() {
        return i
      })
    var i = { desktop: 1 / 0, desktopHd: 1919, phone: 767, 'phone-vertical': 479, tablet: 1019 }
  },
  839: function(t, e, o) {
    'use strict'
    ;(function(t, i) {
      function n(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function s(t) {
        var e, o
        if (t && t.__esModule) return t
        if (((e = {}), null != t))
          for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        return (e.default = t), e
      }
      function r(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function a(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function l(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
      }
      function c() {
        y.forEach(function(t) {
          return t.close()
        })
      }
      var h, d, u, p, f, g, _, v, b, y, m, w, C, k, T, x, O
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TVDialogAbstract = void 0),
        (h =
          Object.assign ||
          function(t) {
            var e, o, i
            for (e = 1; e < arguments.length; e++) {
              o = arguments[e]
              for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i])
            }
            return t
          }),
        (d = (function() {
          function t(t, e) {
            var o, i
            for (o = 0; o < e.length; o++)
              (i = e[o]),
                (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
          }
          return function(e, o, i) {
            return o && t(e.prototype, o), i && t(e, i), e
          }
        })()),
        (e.closeAllDialogs = c),
        (u = o(184)),
        (p = s(u)),
        o(840),
        (f = o(308)),
        (g = n(f)),
        o(841),
        o(842),
        o(834),
        (_ = o(301)),
        (v = n(_)),
        (b = 0),
        (y = []),
        (m = void 0),
        (w = 110),
        (C = $(document)),
        (k = {
          closeOnEsc: !0,
          closeButton: !0,
          focusFirstControl: !0,
          closeOnOutsideClick: !0,
          closeButtonAddClass: '',
          focusClass: 'i-focused',
          template: '<div class="tv-dialog">',
          errorTemplate:
            '<div class="tv-dialog__error i-slided{{# errorMod }} tv-dialog__error--{{ errorMod }}{{/ errorMod }}">{{{ error }}}</div>',
          titleTemplate:
            '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag"><div class="js-title-text tv-dialog__title">{{{ title }}}</div></div>',
          contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border">',
          actionsWrapTemplate:
            '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
          closeButtonTemplate:
            '<div class="tv-dialog__close js-dialog__close">' + o(828) + '</div>',
          helpButtonTemplate:
            '<a href="{{{ link }}}" target="_blank" class="tv-dialog__help apply-common-tooltip" title="{{{ title }}}"></a>',
          helpActionsMod: 'tv-dialog__section--actions_with-help',
        }),
        (T = {
          default: 'tv-button tv-button--default',
          primary: 'tv-button tv-button--primary',
          success: 'tv-button tv-button--success',
          danger: 'tv-button tv-button--danger',
          warning: 'tv-button tv-button--warning',
          link: 'tv-button tv-button--link',
          checkbox: 'tv-control-checkbox tv-control-checkbox--in-actions',
          'default-ghost': 'tv-button tv-button--default_ghost',
          'primary-ghost': 'tv-button tv-button--primary_ghost',
          'success-ghost': 'tv-button tv-button--success_ghost',
          'danger-ghost': 'tv-button tv-button--danger_ghost',
          'warning-ghost': 'tv-button tv-button--warning_ghost',
        }),
        (x = {
          _default:
            '<div data-name="{{ name }}" class="js-dialog__action-click js-dialog__no-drag {{ class }}">{{ text }}</div>',
          'submit-success':
            '<button type="submit" class="tv-button tv-button--success">{{ text }}</button>',
        }),
        $(function() {
          k.$wrap = $(document.all && !document.querySelector ? 'html' : 'body')
        }),
        (O = (function(e) {
          function o() {
            var e,
              i,
              n,
              s,
              l,
              c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            for (
              r(this, o),
                e = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this)),
                e._id = b++,
                e.loadingActions = [],
                e.disabledActions = [],
                e.firstFocusControl = null,
                e.options = h({}, k, c),
                e.$el = $(
                  t.render(e.options.template, {
                    title: e.options.title,
                    closeButton: e.options.closeButton,
                  }),
                ),
                e.$el.addClass('js-dialog'),
                e.el = e.$el[0],
                e.options.addClass && e.$el.addClass(e.options.addClass),
                e.options.width && e.$el.css({ width: '100%', 'max-width': e.options.width }),
                e.options.title &&
                  (e.$title = $(
                    t.render(e.options.titleTemplate, { title: e.options.title }),
                  ).appendTo(e.$el)),
                e.$content = $(e.options.contentWrapTemplate).appendTo(e.$el),
                e.$contentIn = e.$content;
              e.$contentIn.length;

            )
              e.$contentIn = e.$contentIn.children()
            if (
              ((e.$contentIn = e.$contentIn.end()),
              e.options.content && e.renderContent(e.options.content),
              (e.options.actions || e.options.help) &&
                (e.$content.hasClass('tv-dialog__section') &&
                  e.$content.addClass('tv-dialog__section--no-padding_bottom'),
                (e.$actions = $(e.options.actionsWrapTemplate).appendTo(e.$el))),
              e.options.actions)
            )
              for (
                e.actions = {},
                  e.$el.on('click touchend', '.js-dialog__action-click', function(t) {
                    t.preventDefault(), e.actionDispatcher($(t.currentTarget).data('name'))
                  }),
                  i = function(o) {
                    var i,
                      n,
                      s,
                      r,
                      a,
                      l,
                      c = e.options.actions[o]
                    c.type || (c.type = 'default'),
                      c.class || (c.class = T[c.type] ? T[c.type] : T.default),
                      'checkbox' === c.type
                        ? ((i = new g.default({
                            labelRight: c.text,
                            name: c.name,
                            checked: c.checked,
                          })),
                          (e.actions[c.name] = i.$el.appendTo(e.$actions)),
                          e.actions[c.name].on('change', function() {
                            setTimeout(function() {
                              return e.actionDispatcher(c.name, i.checked)
                            })
                          }))
                        : (e.actions[c.name] = $(
                            t.render(c.template ? c.template : x[c.type] || x._default, c, c),
                          ).appendTo(e.$actions)),
                      c.method &&
                        'function' == typeof e[c.method] &&
                        e.on('action:' + c.name, e[c.method].bind(e)),
                      c.addClass && e.actions[c.name].addClass(c.addClass),
                      c.key &&
                        ((n = void 0),
                        'string' == typeof c.key && c.key.split('+').length > 1
                          ? ((s = []),
                            (r = c.key.split('+')),
                            (n = function(t) {
                              s = []
                            }),
                            (a = function(t) {
                              var o = '' + t.keyCode
                              ;-1 !== r.indexOf(o) && s.indexOf(o) && s.push(o),
                                e._focused &&
                                  s.length === r.length &&
                                  ((s = []), e.actionDispatcher(c.name))
                            }),
                            e.on('afterOpen', function() {
                              C.on('keydown', a), C.on('keyup', n)
                            }),
                            e.on('beforeClose', function() {
                              C.off('keydown', a), C.off('keyup', n)
                            }))
                          : ((l = $.isArray(c.key) ? c.key : [c.key]),
                            (n = function(t) {
                              !t.isDefaultPrevented() &&
                                e._focused &&
                                -1 !== l.indexOf(t.keyCode) &&
                                e.actionDispatcher(c.name)
                            }),
                            e.on('afterOpen', function() {
                              return C.on('keyup', n)
                            }),
                            e.on('beforeClose', function() {
                              return C.off('keyup', n)
                            })))
                  },
                  n = e.options.actions.length - 1;
                n >= 0;
                n--
              )
                i(n)
            return (
              e.options.help &&
                $(t.render(e.options.helpButtonTemplate, e.options.help)).prependTo(
                  e.$actions.addClass(e.options.helpActionsMod),
                ),
              e.options.closeButton &&
                ((s = $(e.options.closeButtonTemplate)),
                s.addClass(e.options.closeButtonAddClass || ''),
                (l = e.$el),
                1 === e.$el.find('.js-close-button-place').length &&
                  (l = e.$el.find('.js-close-button-place')),
                s.appendTo(l)),
              e.setZIndex(w + y.length),
              c.errorMod && (e.errorMod = c.errorMod),
              e.on('afterOpen', function() {
                e.options.focusFirstControl &&
                  !Modernizr.touch &&
                  (
                    e.firstFocusControl ||
                    e.$el.find('input:not([type="hidden"]), textarea').first()
                  ).focus()
              }),
              e.$el.on('click touchend', '.js-dialog__close', e.close.bind(e)),
              e.$el.on('mousedown touchstart', e.focus.bind(e)),
              y.push(e),
              e
            )
          }
          return (
            l(o, e),
            d(o, [
              {
                key: 'renderContent',
                value: function(t) {
                  return this.$contentIn.html('function' == typeof t ? t(this) : t), this
                },
              },
              {
                key: 'setDestroyOnClose',
                value: function(t) {
                  this.options.destroyOnClose = t
                },
              },
              {
                key: 'setZIndex',
                value: function(t) {
                  return (this.zIndex = t), this.trigger('change:zIndex', [this]), this
                },
              },
              {
                key: 'toTop',
                value: function() {
                  for (var t = y.length - 1; t >= 0; t--)
                    y[t].zIndex > this.zIndex && y[t].setZIndex(y[t].zIndex - 1)
                  return this.setZIndex(w + y.length), this
                },
              },
              {
                key: 'isEventOut',
                value: function(t) {
                  var e, o, i
                  return this.options.isClickOutFn && void 0 !== (e = this.options.isClickOutFn(t))
                    ? e
                    : ((o = !0),
                      (i = $(t.target)),
                      i.get(0) !== this.$el.get(0) &&
                        ($('>*', this.$el).each(function() {
                          i.get(0) === $(this).get(0) && (o = !1),
                            0 === i.closest('HTML', $(this).get(0)).length && (o = !1)
                        }),
                        o))
                },
              },
              {
                key: 'focus',
                value: function() {
                  var t = this
                  m && m !== this && m.unfocus(),
                    this._setFocused(),
                    (this._focused = !0),
                    this.$el.addClass(this.options.focusClass),
                    this.trigger('focus', [this]),
                    setTimeout(function() {
                      C.on('mousedown.tv-dialog-unfocus-' + t._id, function(e) {
                        t.isEventOut(e) &&
                          (t.unfocus(), C.off('mousedown.tv-dialog-unfocus-' + t._id))
                      })
                    }, 20)
                },
              },
              {
                key: '_setFocused',
                value: function() {
                  m !== this && (m = this)
                },
              },
              {
                key: '_setUnfocused',
                value: function() {
                  m === this && (m = void 0)
                },
              },
              {
                key: 'unfocus',
                value: function() {
                  m === this &&
                    (this._setUnfocused(),
                    (this._focused = !1),
                    this.$el
                      .removeClass(this.options.focusClass)
                      .find(':focus')
                      .blur(),
                    this.trigger('unfocus', [this]))
                },
              },
              {
                key: 'isFocused',
                value: function() {
                  return this._focused
                },
              },
              {
                key: 'setTitle',
                value: function(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  return (
                    this.$title.toggleClass(
                      'tv-dialog__section--one-line apply-overflow-tooltip',
                      e,
                    ),
                    this.$title.html(t),
                    this
                  )
                },
              },
              {
                key: 'setTitleText',
                value: function(t) {
                  this.$title.find('.js-title-text').text(t)
                },
              },
              {
                key: 'actionDispatcher',
                value: function(t) {
                  if (!this.disabledActions.includes(t) && !this.loadingActions.includes(t)) {
                    for (var e = arguments.length, o = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                      o[i - 1] = arguments[i]
                    this.trigger('action:' + t, [this].concat(o))
                  }
                },
              },
              {
                key: 'toggleAction',
                value: function(t, e) {
                  return (
                    !e && this.disabledActions.includes(t)
                      ? this.disabledActions.push(t)
                      : e &&
                        this.disabledActions.includes(t) &&
                        (this.disabledActions = i.without(this.disabledActions, t)),
                    this.actions[t].toggleClass('i-disabled', !e),
                    this
                  )
                },
              },
              {
                key: 'actionLoader',
                value: function(t) {
                  var e = this,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'init'
                  return (
                    this.actions[t].tvButtonLoader(o),
                    'init' === o &&
                      (this.actions[t]
                        .off('tv-button-loader:start.dialog-action')
                        .on('tv-button-loader:start.dialog-action', function() {
                          e.loadingActions.push(t)
                        }),
                      this.actions[t]
                        .off('tv-button-loader:stop.dialog-action')
                        .on('tv-button-loader:stop.dialog-action', function() {
                          e.loadingActions = i.without(e.loadingActions, t)
                        })),
                    this
                  )
                },
              },
              {
                key: 'error',
                value: function(e) {
                  var o = $(
                      t.render(this.options.errorTemplate, { error: e, errorMod: this.errorMod }),
                    ).appendTo(this.$el),
                    i = function() {
                      o.addClass('i-slided'),
                        setTimeout(function() {
                          return o.remove()
                        }, 0.75 * p.dur)
                    }
                  return (
                    setTimeout(function() {
                      return o.removeClass('i-slided')
                    }, 20),
                    C.one('touchstart mousedown keydown', i),
                    this.trigger('error', [this, o]),
                    this
                  )
                },
              },
              {
                key: 'destroy',
                value: function() {
                  y = i.without(y, this)
                  for (var t = 0; t < y.length; t++) y[t].setZIndex(w + t)
                  this.trigger('destroy', [this])
                },
              },
              {
                key: 'isOpened',
                value: function() {
                  return !!this.opened
                },
              },
            ]),
            o
          )
        })(v.default)),
        (e.TVDialogAbstract = O),
        C.on('keyup.tv-dialog-esc', function(t) {
          m &&
            m.options.closeOnEsc &&
            !$('.tv-dropdown__body.i-opened').length &&
            !$(t.target).closest('.js-dialog-skip-escape').length &&
            27 === t.keyCode &&
            m.close()
        })
    }.call(e, o(126), o(187)))
  },
  840: function(t, e, o) {
    'use strict'
    function i(t) {
      var e, o
      if (t && t.__esModule) return t
      if (((e = {}), null != t))
        for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return (e.default = t), e
    }
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    var s, r, a, l, c
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ButtonLoader = void 0),
      (s = (function() {
        function t(t, e) {
          var o, i
          for (o = 0; o < e.length; o++)
            (i = e[o]),
              (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
        }
        return function(e, o, i) {
          return o && t(e.prototype, o), i && t(e, i), e
        }
      })()),
      (r = o(309)),
      (a = o(184)),
      (l = i(a)),
      ($.fn.tvButtonLoader = (0, r.createTvBlockWithInstance)('tv-button-loader', function(t, e) {
        return new c(t, e)
      })),
      (c = e.ButtonLoader = (function() {
        function t(e, o) {
          n(this, t),
            (this.$btn = $(e).addClass('tv-button--loader')),
            0 === this.$btn.find('.tv-button__loader').length &&
              this.$btn.html(
                '<span class="tv-button__text">' +
                  this.$btn.html() +
                  '</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span>',
              ),
            (this.loading = this.$btn.hasClass('i-loading'))
        }
        return (
          s(t, [
            {
              key: '_start',
              value: function() {
                var t = this
                ;(this.starting = !0),
                  this.$btn.addClass('i-start-load'),
                  this.$btn.trigger('tv-button-loader:start'),
                  setTimeout(function() {
                    ;(t.loading = !0),
                      (t.starting = !1),
                      (t._startPromise = !1),
                      t.$btn.addClass('i-loading'),
                      t.$btn.removeClass('i-start-load'),
                      t._stopPromise && t._stop()
                  }, 2 * l.dur)
              },
            },
            {
              key: 'start',
              value: function() {
                this.starting || (this.stopping ? (this._startPromise = !0) : this._start())
              },
            },
            {
              key: '_stop',
              value: function() {
                var t = this
                ;(this.stopping = !0),
                  this.$btn.addClass('i-stop-load'),
                  this.$btn.trigger('tv-button-loader:stop'),
                  setTimeout(function() {
                    ;(t.loading = !1),
                      (t.stopping = !1),
                      (t._stopPromise = !1),
                      t.$btn.removeClass('i-loading i-start-load i-stop-load'),
                      t._startPromise && t._start()
                  }, l.dur)
              },
            },
            {
              key: 'stop',
              value: function() {
                this.stopping || (this.starting ? (this._stopPromise = !0) : this._stop())
              },
            },
            {
              key: 'toggle',
              value: function() {
                this.loading ? this.stop() : this.start()
              },
            },
            {
              key: 'contentHtml',
              value: function(t) {
                return t
                  ? (this.$btn.find('.tv-button__text').html(t), t)
                  : this.$btn.find('.tv-button__text').html()
              },
            },
            {
              key: 'contentNojQuery',
              value: function() {
                return this.$btn.get(0)
              },
            },
            {
              key: 'disable',
              value: function() {
                this.stop(), this.$btn.addClass('i-disabled')
              },
            },
            {
              key: 'enable',
              value: function() {
                this.$btn.removeClass('i-disabled')
              },
            },
          ]),
          t
        )
      })())
  },
  841: function(t, e) {},
  842: function(t, e) {},
  843: function(t, e, o) {
    'use strict'
    function i(t) {
      return t && t.__esModule ? t : { default: t }
    }
    function n(t) {
      var e, o
      if (t && t.__esModule) return t
      if (((e = {}), null != t))
        for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return (e.default = t), e
    }
    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
    }
    function a(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
      ;(t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
    }
    var l, c, h, d, u, p, f, g, _, v, b, y, m
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TVPopup = void 0),
      (l =
        Object.assign ||
        function(t) {
          var e, o, i
          for (e = 1; e < arguments.length; e++) {
            o = arguments[e]
            for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i])
          }
          return t
        }),
      (c = (function() {
        function t(t, e) {
          var o, i
          for (o = 0; o < e.length; o++)
            (i = e[o]),
              (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
        }
        return function(e, o, i) {
          return o && t(e.prototype, o), i && t(e, i), e
        }
      })()),
      (h = o(184)),
      (d = n(h)),
      (u = o(832)),
      (p = i(u)),
      (f = o(690)),
      (g = o(833)),
      (_ = o(827)),
      (v = $('body')),
      (b = $(window)),
      (y = {
        closeOnClickAtOtherDialogs: !0,
        draggable: !0,
        scrollWrap: '<div class="tv-dialog__scroll-wrap">',
        scrollWrapInner: '<div class="tv-dialog__scroll-wrap-inner">',
        withScroll: !0,
      }),
      (m = 'js-dialog__scroll-wrap'),
      (e.TVPopup = (function(t) {
        function e() {
          var t,
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (
            s(this, e),
            (t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, l({}, y, o)))),
            (t.$scrollWrap = t.$content.hasClass(m) ? t.$content : t.$content.find('.' + m)),
            t.$scrollWrap.length
              ? (t.$scrollWrapInner = t.$scrollWrap.children().first())
              : ((t.$scrollWrap = t.$content.wrap($(t.options.scrollWrap)).parent()),
                (t.$scrollWrapInner = t.$content.wrap($(t.options.scrollWrapInner)).parent())),
            t.$actions && t.$scrollWrap.addClass('i-with-actions'),
            t.options.withScroll &&
              ((t.scroll = new g.SidebarCustomScroll(t.$scrollWrap, t.$scrollWrapInner)),
              t.scroll.scrolled.subscribe(null, function() {
                return t.trigger('scroll')
              })),
            t.$scrollWrap.css('overflow', ''),
            t.$el.addClass('tv-dialog--popup i-closed i-hidden'),
            t.options.width &&
              t.$el.css({ width: 'calc(100% - 20px)', 'max-width': t.options.width }),
            t.$el.on('mousedown touchstart', t.toTop.bind(t)),
            t.options.closeOnOutsideClick &&
              (t.on('beforeOpen', function() {
                setTimeout(function() {
                  t.opened &&
                    $(document).on('click.tv-popup-' + t.id, function(e) {
                      var o = $(e.target).closest('.js-dialog')
                      ;(t.options.closeOnClickAtOtherDialogs || 0 === o.length) &&
                        t.isEventOut(e) &&
                        t.close()
                    })
                }, 0)
              }),
              t.on('beforeClose', function() {
                return $(document).off('click.tv-popup-' + t.id)
              })),
            t.on('change:zIndex', function() {
              t.$el.css('z-index', t.zIndex)
            }),
            t.on('destroy', function() {
              var e = function() {
                t.$el.remove()
              }
              t.opened ? (t.close(), setTimeout(e, d.dur / 2)) : e()
            }),
            t
          )
        }
        return (
          a(e, t),
          c(e, [
            {
              key: 'open',
              value: function() {
                var t = this
                return this.opened
                  ? this
                  : ((this.opened = !0),
                    this.trigger('beforeOpen', [this]),
                    this.$el
                      .appendTo(this.options.$wrap)
                      .removeClass('i-hidden')
                      .css(
                        (function() {
                          var e, o, i, n, s
                          return (
                            t.calcHeight(),
                            (e = b.height()),
                            (o = b.width()),
                            (i = t.$el.height()),
                            (n = t.$el.width()),
                            (s = t.options.position),
                            s || (s = { top: e / 2 - i / 2, left: o / 2 - n / 2 }),
                            s.top > e - i && (s.top = e - i),
                            s.left > o - n && (s.left = o - n),
                            s
                          )
                        })(),
                      ),
                    this.focus(),
                    this.toTop(),
                    this._doOpenAnimation().then(function() {
                      t.opened &&
                        (t.$el.removeClass('i-closed'),
                        t.options.draggable &&
                          ((0, _.lazyJqueryUI)(t.$el).draggable({
                            handle: '.js-dialog__drag',
                            cancel:
                              'input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close',
                            containment: 'window',
                            cursor: '-webkit-grabbing',
                          }),
                          t.$el.find('.js-dialog__drag').addClass('tv-dialog__grab')),
                        t.trigger('afterOpen', [t]))
                    }),
                    b.on('resize.tv-popup-' + this.id, function() {
                      t.calcHeight(), t.fixPos()
                    }),
                    this)
              },
            },
            {
              key: 'close',
              value: function() {
                var t = this
                if (this.opened)
                  return (
                    this.trigger('beforeClose', [this]),
                    this.$el.addClass('i-closed'),
                    (this.opened = !1),
                    this._doCloseAnimation().then(function() {
                      t.opened ||
                        ((0, _.lazyJqueryUI)(t.$el)
                          .draggable('instance')
                          .then(function(t) {
                            t && t.destroy()
                          }),
                        t.$el.addClass('i-hidden').detach(),
                        v.css('cursor', 'auto'),
                        t.trigger('afterClose', [t]),
                        t.options.destroyOnClose && t.destroy())
                    }),
                    b.off('resize.tv-popup-' + this.id),
                    this
                  )
              },
            },
            {
              key: 'hide',
              value: function() {
                this.$el.addClass('i-hidden')
              },
            },
            {
              key: 'show',
              value: function() {
                this.$el.removeClass('i-hidden')
              },
            },
            {
              key: 'fixPos',
              value: function() {
                var t = this.$el[0].getBoundingClientRect(),
                  e = {}
                t.bottom > p.default.height - 10 &&
                  ((e.top = p.default.height - 10 - t.height), e.top < 10 && (e.top = 10)),
                  t.right > p.default.width - 10 &&
                    ((e.left = p.default.width - 10 - t.width), e.left < 10 && (e.left = 10)),
                  (e.top || e.left) && this.$el.css(e)
              },
            },
            {
              key: 'calcHeight',
              value: function() {
                var t,
                  e,
                  o = this.$el[0].getBoundingClientRect(),
                  i = this.$scrollWrapInner[0].getBoundingClientRect(),
                  n = this.$scrollWrap[0].getBoundingClientRect(),
                  s =
                    this.options.height && this.options.height < p.default.height - 20
                      ? this.options.height
                      : p.default.height - 20
                this.$scrollWrap.css({ height: '' }).removeClass('i-scrollable'),
                  (t = this.$el[0].getBoundingClientRect()),
                  (this.options.height || t.height > s) &&
                    ((s -= o.height - n.height),
                    s < 60 && (s = 60),
                    this.$scrollWrap.css({ height: s })),
                  this.options.withScroll && this.scroll.resize(),
                  (e = s < i.height),
                  e || this.$scrollWrapInner.css('top', 0),
                  this.$scrollWrap.toggleClass('i-scrollable', e),
                  this.$actions &&
                    this.$actions.toggleClass('tv-dialog__section--actions_with-border', e)
              },
            },
            {
              key: 'updateScroll',
              value: function() {
                this.scroll && (this.scroll.updateScroll(), this.scroll.updateScrollBar())
              },
            },
            {
              key: 'scrollToStart',
              value: function() {
                this.scroll && this.scroll.scrollToStart()
              },
            },
            {
              key: '_doOpenAnimation',
              value: function() {
                return Promise.resolve()
              },
            },
            {
              key: '_doCloseAnimation',
              value: function() {
                return Promise.resolve()
              },
            },
          ]),
          e
        )
      })(f.TVDialogAbstract))
  },
})
