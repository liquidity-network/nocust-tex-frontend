webpackJsonp([14, 2], {
  1013: function(t, e, o) {
    'use strict'
    function i(t) {
      return t && t.__esModule ? t : { default: t }
    }
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    function s(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
    }
    function r(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
      ;(t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
    }
    var a, l
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.AddSymbolCheckbox = void 0),
      (a = o(308)),
      (l = i(a)),
      (e.AddSymbolCheckbox = (function(t) {
        function e(t) {
          n(this, e), (t.checked = TVSettings.getBool('showAddSymbolDialog.checkboxState', !0))
          var o = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
          return (
            o.$checkbox.change(function() {
              setTimeout(function() {
                TVSettings.setValue('showAddSymbolDialog.checkboxState', o.checked)
              })
            }),
            o
          )
        }
        return r(e, t), e
      })(l.default))
  },
  1024: function(t, e, o) {
    'use strict'
    ;(function(t) {
      function i(e) {
        var o, i, c, d, h, u, p, f, _, g, b
        if (
          ((e = $.extend({}, l, e)),
          (o = $(
            t.render(
              r,
              {
                tabs: e.tabs,
                customControls: e.customControls,
                customControlsAddClass: e.customControlsContainerAddClass,
              },
              { additionalHeaderContent: e.additionalHeaderContent },
            ),
          )),
          (i = $(a)),
          (c = i),
          e.contentAddClass && i.addClass(e.contentAddClass),
          !1 !== e.withScroll &&
            (i = $('<div class="js-dialog__scroll-wrap tv-dialog__scroll-wrap">').append(
              c.addClass('tv-dialog__scroll-wrap-inner'),
            )),
          (d = $('<div class="tv-tabbed-dialog">')
            .append(o)
            .append(i)),
          e.customControls && o.find('.js-custom-controls').append(e.customControls),
          !0 !== e.doNotCreatePages)
        )
          for (h = 0; h < e.tabs.length; ++h)
            c.append($('<div class="tv-tabbed-dialog__tab-page">').append(e.tabs[h].page))
        return (
          (u = e.tabStateSaveKey),
          (p = e.activeTab),
          (f = e.tabsScrollBoxAddClass),
          (_ = e.tabAddClass),
          delete e.tabs,
          delete e.activeTab,
          delete e.customControls,
          delete e.tabStateSaveKey,
          delete e.customControlsContainerAddClass,
          delete e.tabsScrollBoxAddClass,
          delete e.tabAddClass,
          (e.closeButtonAddClass = 'tv-tabbed-dialog__close'),
          (e.contentWrapTemplate = d),
          (g = (0, s.createDialog)(e)),
          (b = new n.Tabs(o.find('.tv-tabs').get(0), c.get(0), {
            addLeftArrowsClass: 'tv-tabbed-dialog__tabs-arrow-left',
            addRightArrowsClass: 'tv-tabbed-dialog__tabs-arrow-right',
            addScrollBoxClass: f,
            tabClass: _,
            saveTab: u,
            activeTab: p,
          })),
          g.on('afterOpen', function() {
            b.setActivePage(b.index(), !0, !0)
          }),
          { dialog: g, tabs: b }
        )
      }
      var n, s, r, a, l
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.createTabbedDialog = i),
        (n = o(1025)),
        (s = o(188)),
        o(1027),
        (r =
          '<div class="tv-dialog__section tv-dialog__section--title tv-tabbed-dialog__header js-dialog__drag js-close-button-place"><div class="tv-tabs tv-tabbed-dialog__tabs js-dialog__drag">{{#tabs}}<div class="tv-tabs__tab">{{name}}</div>{{/tabs}}</div>{{#customControls}}<div class="js-custom-controls tv-tabbed-dialog__custom-controls {{#customControlsAddClass}}{{customControlsAddClass}}{{/customControlsAddClass}}"></div>{{/customControls}}<div class="tv-tabbed-dialog__bottom-border"></div></div>{{>additionalHeaderContent}}'),
        (a = '<div class="tv-tabbed-dialog__pages-container"></div>'),
        (l = { tabs: [] })
    }.call(e, o(126)))
  },
  1025: function(t, e, o) {
    'use strict'
    function i(t) {
      var e,
        o = []
      for (e = 1; e < arguments.length; e++) o[e - 1] = arguments[e]
      return t && 'object' == typeof t
        ? 0 === o.length
          ? t
          : (o.forEach(function(e) {
              void 0 !== e &&
                null !== e &&
                'object' == typeof e &&
                Object.keys(e).forEach(function(o) {
                  var s,
                    r,
                    a = t[o],
                    l = e[o]
                  l === t ||
                    ((s = Array.isArray(l)),
                    l && (n(l) || s)
                      ? ((r = void 0),
                        (r = s ? (a && Array.isArray(a) ? a : []) : a && n(a) ? a : {}),
                        (t[o] = i(r, l)))
                      : void 0 !== l && (t[o] = l))
                })
            }),
            t)
        : t
    }
    function n(t) {
      var e, o, i
      return (
        !(!t || '[object Object]' !== Object.prototype.toString.call(t)) &&
        (!(e = Object.getPrototypeOf(t)) ||
          ((o = Object.hasOwnProperty.toString),
          'function' == typeof (i = e.hasOwnProperty('constructor') && e.constructor) &&
            o.call(i) === o.call(Object)))
      )
    }
    var s, r, a, l, c, d, h, u, p, f, _, g, b, v
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (s = o(1026)),
      (r = o(319)),
      (a = o(127)),
      (l = o(184)),
      (c = o(8)),
      (d = o.n(c)),
      (h = o(873)),
      (u = o(973)),
      (p = o(49)),
      (f = o(38)),
      o.d(e, 'Tabs', function() {
        return v
      }),
      (function(t) {
        ;(t[(t.Left = 0)] = 'Left'), (t[(t.Right = 1)] = 'Right')
      })(_ || (_ = {})),
      (g = {
        saveTab: '',
        noSlider: !1,
        onTabClick: !1,
        loadedClass: 'i-loaded',
        tabsContainerClass: 'tv-tabs',
        tabClass: 'tv-tabs__tab',
        tabDisabledClass: 'disabled',
        activeTabClass: 'i-active',
        activePageClass: 'active',
        sliderClass: 'tv-tabs__slider',
        scrollBoxClass: 'tv-tabs__scroll-box',
        scrollWrapClass: 'tv-tabs__scroll-wrap',
        lArrowClass: 'tv-tabs__left-arrow',
        rArrowClass: 'tv-tabs__right-arrow',
      }),
      (b = { leftArrow: h, rightArrow: u }),
      (v = (function() {
        function t(t, e, o) {
          void 0 === o && (o = {}),
            (this._animating = !1),
            (this._prevWidth = -1),
            (this._bindings = []),
            (this._options = i({}, g, o)),
            (this.tabChanged = new d.a()),
            (this._elTabs = t),
            (this._elPages = e),
            (this._elScrollWrap = this._findOrCreateElement(
              this._options.scrollWrapClass || '',
              this._elTabs,
              'wrapInner',
            )),
            (this._elScrollBox = this._findOrCreateElement(
              this._options.scrollBoxClass || '',
              this._elScrollWrap,
              'wrapInner',
            )),
            (this._elArrowLeft = this._findOrCreateElement(
              this._options.lArrowClass || '',
              this._elTabs,
              'append',
              '<div class="' +
                (this._options.lArrowClass || '') +
                ' i-slided">' +
                b.leftArrow +
                '</div>',
            )),
            (this._elArrowRight = this._findOrCreateElement(
              this._options.rArrowClass || '',
              this._elTabs,
              'append',
              '<div class="' +
                (this._options.rArrowClass || '') +
                ' i-slided">' +
                b.rightArrow +
                '</div>',
            )),
            this._options.noSlider ||
              (this._elSlider = this._findOrCreateElement(
                this._options.sliderClass || '',
                this._elScrollBox,
                'append',
              )),
            this._addClass(this._elArrowLeft, this._options.addLeftArrowsClass),
            this._addClass(this._elArrowRight, this._options.addRightArrowsClass),
            this._addClass(this._elScrollBox, this._options.addScrollBoxClass),
            this._addClass(this._elSlider, this._options.addSliderClass),
            this._addClass(this._elTabs, this._options.tabsContainerClass),
            this._addClass(this.getTabsArray(), this._options.tabClass),
            this._addClass(this._elTabs, this._options.loadedClass),
            this.checkScrollArrows(!0),
            this._initActivePage(),
            this._bindEvents()
        }
        return (
          (t.prototype.getTabsArray = function() {
            var t,
              e,
              o,
              i = this._elScrollBox.children
            if (!this._options.sliderClass) return Array.prototype.slice.call(i)
            for (t = [], e = 0; e < i.length; e++)
              (o = i[e]), o.classList.contains(this._options.sliderClass) || t.push(o)
            return t
          }),
          (t.prototype.getPagesArray = function() {
            return this._elPages ? Array.prototype.slice.call(this._elPages.children) : []
          }),
          (t.prototype.getElTabs = function() {
            return this._elTabs
          }),
          (t.prototype.getElPages = function() {
            return this._elPages
          }),
          (t.prototype.checkScrollArrows = function(t) {
            function e(t) {
              t.classList.remove('i-slided'),
                $.Velocity &&
                  $.Velocity.animate(
                    t,
                    { translateX: '0%' },
                    { duration: l.dur / 2, easing: 'easeOutCubic', queue: !1 },
                  )
            }
            function o(e, o) {
              if (t) return e.classList.add('i-slided'), void e.setAttribute('style', '')
              var i = o === _.Left ? '-100%' : '100%'
              Object(r.lazyVelocity)().then(function() {
                $.Velocity.animate(
                  e,
                  { translateX: i },
                  {
                    complete: function() {
                      return e.classList.add('i-slided')
                    },
                    duration: l.dur / 2,
                    easing: 'easeOutCubic',
                    queue: !1,
                  },
                )
              })
            }
            var i, n, s, a
            void 0 === t && (t = !1),
              (i = Math.ceil(this._elScrollWrap.scrollLeft)),
              (n = this._getElWidth(this._elScrollWrap)),
              (s = 10),
              (a = this._elScrollWrap.scrollWidth - n),
              i >= s
                ? e(this._elArrowLeft)
                : (i <= s || this._elScrollWrap.scrollWidth <= n) && o(this._elArrowLeft, _.Left),
              a - i > 1
                ? e(this._elArrowRight)
                : (i >= a || this._elScrollWrap.scrollWidth <= n) && o(this._elArrowRight, _.Right)
          }),
          (t.prototype.index = function() {
            var t = this.getElActiveTab()
            return t ? this.getTabsArray().indexOf(t) : -1
          }),
          (t.prototype.getElActiveTab = function() {
            return this._getActiveElement(
              this.getTabsArray(),
              this._options.activeTabClass || '',
              this._options.inactiveTabClass,
            )
          }),
          (t.prototype.getElActivePage = function() {
            return this._getActiveElement(
              this.getPagesArray(),
              this._options.activePageClass || '',
              this._options.inactivePageClass,
            )
          }),
          (t.prototype.setActivePage = function(t, e, o) {
            function i(e, o, i) {
              e.forEach(function(e, n) {
                var s = t === n,
                  r = e.classList
                o && r.toggle(o, s), i && r.toggle(i, !s)
              })
            }
            if (-1 !== t && (t !== this.index() || o)) {
              var n = this.index()
              i(this.getTabsArray(), this._options.activeTabClass, this._options.inactiveTabClass),
                i(
                  this.getPagesArray(),
                  this._options.activePageClass,
                  this._options.inactivePageClass,
                ),
                this._options.noSlider || this.updateSlider(n, t, e),
                this._options.saveTab && p.setValue(this._options.saveTab, t),
                this.tabChanged.fire(t)
            }
          }),
          (t.prototype.updateSlider = function(t, e, o) {
            var i,
              n,
              s,
              a,
              c,
              d,
              h = this
            this._options.noSlider ||
              ((i = this.getTabsArray()[e]),
              0 === i.clientWidth ||
                0 === i.clientHeight ||
                'none' === window.getComputedStyle(i).getPropertyValue('display') ||
                ((n = window.getComputedStyle(i)),
                (s = i.offsetLeft + parseInt(n.getPropertyValue('padding-left'))),
                (a = this._getElWidth(i)),
                (c = i.querySelector('.js-tabs__slider-pos')),
                c &&
                  ((d = window.getComputedStyle(c)),
                  (s += parseInt(d.getPropertyValue('padding-left')) + c.offsetLeft),
                  (a -= a - this._getElWidth(c))),
                (o = o || -1 === t || (document.all && !window.atob)),
                o
                  ? ((this._elSlider.style.left = s + 'px'),
                    (this._elSlider.style.width = a + 'px'))
                  : ((this._animating = !0),
                    Object(r.lazyVelocity)().then(function() {
                      $.Velocity.animate(
                        h._elSlider,
                        { left: s },
                        { duration: l.dur, easing: 'easeOutCubic', queue: !1 },
                      ),
                        $.Velocity.animate(
                          h._elSlider,
                          { width: a },
                          {
                            complete: function() {
                              h._animating = !1
                            },
                            duration: l.dur,
                            easing: 'easeOutCubic',
                            queue: !1,
                          },
                        )
                    }))))
          }),
          (t.prototype.onTabClick = function(t) {
            var e = t.currentTarget || t.target,
              o = this.getTabsArray().indexOf(e)
            ;-1 === o || this._isTabDisabled(e) || this.setActivePage(o),
              document.activeElement.blur(),
              t.preventDefault()
          }),
          (t.prototype.resizeSlider = function() {
            var t, e
            this._options.noSlider ||
              ((t = this._elTabs.offsetWidth) !== this._prevWidth &&
                ((this._prevWidth = t), (e = this.index()), this.updateSlider(e, e, !0)))
          }),
          (t.prototype.count = function() {
            return this.getTabsArray().length
          }),
          (t.prototype.add = function(t, e) {
            this._elScrollBox.appendChild(t),
              this._elPages && e && this._elPages.appendChild(e),
              this._bindTabEvents(t),
              this.checkScrollArrows(!0)
          }),
          (t.prototype.remove = function(t) {
            function e(t) {
              t.parentElement && t.parentElement.removeChild(t)
            }
            var o,
              i,
              n = this.tabAt(t)
            n && (this._unbindTabEvents(n), e(n)),
              (o = this.pageAt(t)),
              o && e(o),
              (i = t - 1 >= 0 ? t - 1 : 0),
              this.setActivePage(i),
              this.checkScrollArrows(!0)
          }),
          (t.prototype.indexOfTab = function(t) {
            return this.getTabsArray().indexOf(t)
          }),
          (t.prototype.indexOfPage = function(t) {
            return this.getPagesArray().indexOf(t)
          }),
          (t.prototype.pageAt = function(t) {
            return this.getPagesArray()[t] || null
          }),
          (t.prototype.tabAt = function(t) {
            return this.getTabsArray()[t] || null
          }),
          (t.prototype.deselect = function(t) {
            var e,
              o = this.getElActiveTab()
            return (
              this._options.activeTabClass && o && o.classList.remove(this._options.activeTabClass),
              (e = this.getElActivePage()),
              this._options.activePageClass &&
                e &&
                e.classList.remove(this._options.activePageClass),
              this._elSlider &&
                ((this._elSlider.style.left = ''), (this._elSlider.style.width = '')),
              this
            )
          }),
          (t.prototype.stop = function() {
            this._unbindEvents({})
          }),
          (t.prototype._getElWidth = function(t) {
            if (0 === t.offsetWidth) return 0
            var e = window.getComputedStyle(t)
            return (
              t.offsetWidth -
              parseFloat(e.getPropertyValue('padding-left')) -
              parseFloat(e.getPropertyValue('padding-right')) -
              parseFloat(e.getPropertyValue('border-left-width')) -
              parseFloat(e.getPropertyValue('border-right-width'))
            )
          }),
          (t.prototype._findOrCreateElement = function(t, e, o, i) {
            var n,
              s,
              r,
              a = e.querySelector('.' + t)
            if (!a)
              if (
                ((n = document.createElement('div')),
                (n.innerHTML = i || '<div class="' + t + '"></div>'),
                (a = n.firstElementChild),
                'append' === o)
              )
                e.appendChild(a)
              else {
                if ('wrapInner' !== o) throw Error('Unknown insertMethod')
                for (s = Array.prototype.slice.call(e.childNodes), r = 0; r < s.length; r++)
                  a.appendChild(s[r])
                e.appendChild(a)
              }
            return a
          }),
          (t.prototype._addClass = function(t, e) {
            if ('string' == typeof e) {
              Array.isArray(t) || (t = [t])
              var o = e.split(/\s+/)
              t.forEach(function(t) {
                o.forEach(function(e) {
                  t.classList.add(e)
                })
              })
            }
          }),
          (t.prototype._initActivePage = function() {
            var t,
              e = 0
            this._options.saveTab && (e = p.getInt(this._options.saveTab, 0)),
              (t = this.index()),
              -1 !== t && (e = t),
              void 0 !== this._options.activeTab && (e = this._options.activeTab),
              this.setActivePage(e, !0, !0)
          }),
          (t.prototype._bindEvents = function() {
            var t,
              e = this
            this.getTabsArray().forEach(this._bindTabEvents.bind(this)),
              this._bindOneEvent({
                eventName: 'scroll',
                listener: this.checkScrollArrows.bind(this, !1),
                target: this._elScrollWrap,
              }),
              this._bindOneEvent({
                eventName: 'click',
                listener: function(t) {
                  var o = e.getTabsArray(),
                    i = 0,
                    n = !1,
                    s = e._elScrollWrap.scrollLeft
                  f.IS_RTL && o.reverse(),
                    o.forEach(function(t) {
                      if (!n) {
                        var e = t.offsetLeft + t.offsetWidth
                        e > s ? (n = !0) : (i = e)
                      }
                    }),
                    Object(r.lazyVelocity)().then(function() {
                      $.Velocity.animate(e._elScrollWrap, 'scroll', {
                        axis: 'x',
                        container: $(e._elScrollWrap),
                        duration: l.dur / 2,
                        easing: 'easeInOutCubic',
                        offset: Math.floor(i - s - e._getElWidth(e._elArrowLeft)),
                        queue: !1,
                      })
                    })
                },
                target: this._elArrowLeft,
              }),
              this._bindOneEvent({
                eventName: 'click',
                listener: function(t) {
                  var o = e.getTabsArray(),
                    i = 0,
                    n = f.IS_RTL ? 0 : e._elScrollWrap.scrollLeft + e._getElWidth(e._elScrollWrap)
                  f.IS_RTL && o.reverse(),
                    o.forEach(function(t) {
                      if (0 === i) {
                        var e = t.offsetLeft + t.offsetWidth
                        e > n && (i = e)
                      }
                    }),
                    Object(r.lazyVelocity)().then(function() {
                      $.Velocity.animate(e._elScrollWrap, 'scroll', {
                        axis: 'x',
                        container: $(e._elScrollWrap),
                        duration: l.dur / 2,
                        easing: 'easeInOutCubic',
                        offset: Math.ceil(i - n + e._getElWidth(e._elArrowRight)),
                        queue: !1,
                      })
                    })
                },
                target: this._elArrowRight,
              }),
              (t = Array.prototype.slice.call(
                this._elTabs.querySelectorAll('.js-tabs__slider-hover') || [],
              )),
              t.length &&
                t.forEach(function(t) {
                  return e._bindOneEvent({
                    eventName: 'mouseenter',
                    listener: function(t) {
                      if (!e._animating) {
                        var o = t.currentTarget
                        o &&
                          e._options.activeTabClass &&
                          o.classList &&
                          o.classList.contains(e._options.activeTabClass) &&
                          e._hoverSlider(o)
                      }
                    },
                    target: t,
                  })
                }),
              this._bindOneEvent({
                eventName: 'resize',
                listener: function() {
                  e.checkScrollArrows(!0), e._options.noSlider || e.resizeSlider()
                },
                target: window,
              })
          }),
          (t.prototype._bindTabEvents = function(t) {
            var e = this
            this._bindOneEvent({
              eventName: 'click',
              listener: function(t) {
                'function' == typeof e._options.onTabClick
                  ? e._options.onTabClick(t)
                  : e.onTabClick(t)
              },
              target: t,
            })
          }),
          (t.prototype._unbindTabEvents = function(t) {
            this._unbindEvents({ target: t })
          }),
          (t.prototype._bindOneEvent = function(t) {
            t.target.addEventListener(t.eventName, t.listener), this._bindings.push(t)
          }),
          (t.prototype._unbindEvents = function(t) {
            var e = function(e) {
              return !(
                (void 0 !== e.eventName && e.eventName !== t.eventName) ||
                (void 0 !== e.target && e.target !== t.target) ||
                (void 0 !== e.listener && e.listener !== t.listener)
              )
            }
            this._bindings.filter(e).forEach(function(t) {
              return t.target.removeEventListener(t.eventName, t.listener)
            }),
              (this._bindings = this._bindings.filter(function(t) {
                return !e(t)
              }))
          }),
          (t.prototype._getActiveElement = function(t, e, o) {
            var i = function(t, i, n) {
              return e ? t.classList.contains(e) : !!o && !t.classList.contains(o)
            }
            return t.filter(i)[0] || null
          }),
          (t.prototype._isTabDisabled = function(t) {
            return (
              t.classList.contains('i-disabled') ||
              (this._options.tabDisabledClass &&
                t.classList.contains(this._options.tabDisabledClass)) ||
              t.hasAttribute('disabled')
            )
          }),
          (t.prototype._hoverSlider = function(t) {
            var e,
              o = this,
              i = this._getElWidth(t),
              n = window.getComputedStyle(t),
              s =
                t.offsetLeft +
                parseInt(n.getPropertyValue('padding-left')) +
                parseInt(n.getPropertyValue('margin-left')),
              a = { duration: l.dur / 4, easing: 'easeOutCubic', queue: !1 }
            Object(r.lazyVelocity)().then(function() {
              $.Velocity.animate(o._elSlider, { left: s }, a),
                $.Velocity.animate(o._elSlider, { width: i }, a)
            }),
              (e = function() {
                o.getElActiveTab() === t && o._unhoverSlider(t),
                  t.removeEventListener('mousleave', e)
              }),
              t.addEventListener('mouseleave', e)
          }),
          (t.prototype._unhoverSlider = function(t) {
            var e = this,
              o = window.getComputedStyle(t),
              i = t.querySelector('.js-tabs__slider-pos'),
              n = window.getComputedStyle(i),
              s =
                t.offsetLeft +
                parseInt(o.getPropertyValue('padding-left')) +
                parseInt(o.getPropertyValue('margin-left')) +
                parseInt(n.getPropertyValue('padding-left')) +
                i.offsetLeft,
              a = this._getElWidth(t),
              c = a - (a - this._getElWidth(i)),
              d = { duration: l.dur / 2, easing: 'easeInSine', queue: !1 }
            Object(r.lazyVelocity)().then(function() {
              $.Velocity.animate(e._elSlider, { left: s }, d),
                $.Velocity.animate(e._elSlider, { width: c }, d)
            })
          }),
          t
        )
      })())
  },
  1026: function(t, e) {},
  1027: function(t, e) {},
  1043: function(t, e) {},
  1216: function(t, e, o) {
    'use strict'
    ;(function(t, i) {
      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      var s, r, a, l, c, d
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CompareTab = void 0),
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
        (r = o(128)),
        (a = o(39)),
        o(1043),
        o(337),
        o(1217),
        (l =
          '\n\t<div class="tv-compare-tab">\n\t\t<input type="text" class="tv-control-input js-compare-tab-input" placeholder="' +
          $.t('Company Comparison') +
          '" autocomplete="off">\n\t</div>'),
        (c = '<div class="tv-compare-tab__predefines js-compare-tab-predefines"></div>'),
        (d =
          '\n\t<div class="tv-compare-tab__predefine-cell">\n\t\t<label for="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox">\n\t\t\t\t<input class="tv-control-checkbox__input js-predefine-checkbox" type="checkbox" id="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox__box tv-compare-tab__checkbox-box">' +
          o(195) +
          '</span>\n\t\t\t<span class="tv-control-checkbox__ripple js-ripple"></span>\n\t\t\t</span>\n\t\t\t<span class="tv-control-checkbox__label tv-compare-tab__checkbox-label">{{label}}</span>\n\t\t</label>\n\t</div>'),
        (e.CompareTab = (function() {
          function e(t, o) {
            n(this, e),
              (this._chartWidgetCollection = t),
              (this._dialog = o),
              (this._$popup = null),
              (this._predefines = {}),
              (this._symbolAlias = {}),
              this.init()
          }
          return (
            s(e, [
              {
                key: 'addCompareSymbol',
                value: function(t, e, o) {
                  var i,
                    n,
                    s,
                    r,
                    l,
                    c,
                    d = this._chartWidgetCollection.activeChartWidget.value()
                  if (d && (i = d.model())) {
                    for (
                      n = i.mainSeries().interval(), s = i.studiesMetaData(), r = void 0, l = 0;
                      l < s.length;
                      l++
                    )
                      'Compare@tv-basicstudies' === s[l].id && (r = s[l])
                    return (
                      (c = { exchange: o, inputs: { symbol: t, resolution: n } }),
                      (0, a.trackEvent)('GUI', 'Add Compare'),
                      i.insertStudy(r, c)
                    )
                  }
                },
              },
              {
                key: 'removeCompareSymbol',
                value: function(t) {
                  var e,
                    o = this,
                    i = this._chartWidgetCollection.activeChartWidget.value()
                  i &&
                    (e = i.model()) &&
                    e.dataSources().forEach(function(i) {
                      if (i._metaInfo && 'Compare@tv-basicstudies' === i._metaInfo.id) {
                        var n = i.properties().inputs.symbol.value()
                        ;(n === t || (o._symbolAlias[n] && o._symbolAlias[n] === t)) &&
                          e.removeSource(i)
                      }
                    })
                },
              },
              {
                key: 'init',
                value: function() {
                  var e,
                    o,
                    i,
                    n = this,
                    s = this._chartWidgetCollection.activeChartWidget.value()
                  s &&
                    (e = s.model()) &&
                    ((o = e.dataSources()),
                    (this.$tab = $(l)),
                    this._initSymbolSearch(),
                    t.enabled('charting_library_base') ||
                      (this._createPredefinesList(),
                      (i = this.$tab.find('.js-compare-tab-predefines')),
                      i.find('.js-predefine-checkbox').attr('checked', !1),
                      Object.keys(this._predefines).forEach(function(t) {
                        var e = n._symbolToId(t),
                          s = i.find('#' + e)
                        o.forEach(function(e) {
                          if (e._metaInfo && 'Compare@tv-basicstudies' === e._metaInfo.id) {
                            var o = e.properties().inputs.symbol.value()
                            ;(o === t || (n._symbolAlias[o] && n._symbolAlias[o] === t)) &&
                              s.attr('checked', !0)
                          }
                        })
                      })))
                },
              },
              {
                key: '_initSymbolSearch',
                value: function() {
                  var t = this
                  ;(this._$input = this.$tab.find('.js-compare-tab-input')),
                    (0, r.bindToInput)(this._$input, {
                      callback: function(e) {
                        return t.addCompareSymbol(e)
                      },
                      onPopupOpen: function(e) {
                        e.css('z-index', t._dialog.getZIndex()), (t._$popup = e)
                      },
                      onPopupClose: function() {
                        t._$popup = null
                      },
                      keepFocus: !0,
                      clearAfterAccept: !0,
                    })
                },
              },
              {
                key: '_createPredefinesList',
                value: function() {
                  function t(t) {
                    var e = this
                    setTimeout(function() {
                      if ($(e).is(':checked')) {
                        o.addCompareSymbol(t.data.symbol) || $(e).attr('checked', !1)
                      } else o.removeCompareSymbol(t.data.symbol)
                    })
                  }
                  var e = this,
                    o = this,
                    n = $(c)
                  Object.keys(this._predefines).forEach(function(o) {
                    var s = $(i.render(d, { symbolId: e._symbolToId(o), label: e._predefines[o] }))
                    s.find('.js-predefine-checkbox').change({ symbol: o }, t), s.appendTo(n)
                  }),
                    n.appendTo(this.$tab)
                },
              },
              {
                key: '_symbolToId',
                value: function(t) {
                  return t.replace(/[^a-z0-9]/gi, '_')
                },
              },
              {
                key: 'focus',
                value: function() {
                  Modernizr.touch || this._$input.focus()
                },
              },
              {
                key: 'isClickOnTab',
                value: function(t) {
                  return (
                    !!this._$popup &&
                    !(this._$popup[0] !== t.target && !this._$popup[0].contains(t.target))
                  )
                },
              },
            ]),
            e
          )
        })())
    }.call(e, o(5), o(126)))
  },
  1217: function(t, e) {},
  1218: function(t, e, o) {
    'use strict'
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    var n, s, r, a
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.AddSymbolTab = void 0),
      (n = (function() {
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
      (s = o(128)),
      (r = o(1013)),
      o(1043),
      o(1219),
      (a =
        '\n\t<div class="tv-add-symbol-tab">\n\t\t<input type="text" class="tv-control-input js-add-symbol-tab-input" placeholder="' +
        $.t('Symbol') +
        '" autocomplete="off">\n\t\t<div class="tv-add-symbol-tab__add-symbol-overlay js-add-symbol-tab-checkbox"></div>\n\t</div>'),
      (e.AddSymbolTab = (function() {
        function t(e, o) {
          i(this, t),
            (this._chartWidgetCollection = e),
            (this._dialog = o),
            (this._$popup = null),
            this.init()
        }
        return (
          n(t, [
            {
              key: 'init',
              value: function() {
                var t = this
                ;(this.$tab = $(a)),
                  (this._$input = this.$tab.find('.js-add-symbol-tab-input')),
                  (this._checkbox = new r.AddSymbolCheckbox({
                    labelRight: $.t('Overlay the main chart'),
                    labelAddClass: 'tv-add-symbol-tab__checkbox-label',
                    boxAddClass: 'tv-add-symbol-tab__checkbox-box',
                  })),
                  this.$tab.find('.js-add-symbol-tab-checkbox').append(this._checkbox.$el),
                  (0, s.bindToInput)(this._$input, {
                    callback: function(e) {
                      var o = t._chartWidgetCollection.activeChartWidget.value()
                      o && o.addSymbol(e, t._checkbox.checked)
                    },
                    onPopupOpen: function(e) {
                      e.css('z-index', t._dialog.getZIndex()), (t._$popup = e)
                    },
                    onPopupClose: function() {
                      t._$popup = null
                    },
                    keepFocus: !0,
                    clearAfterAccept: !0,
                  })
              },
            },
            {
              key: 'focus',
              value: function() {
                Modernizr.touch || this._$input.focus()
              },
            },
            {
              key: 'isClickOnTab',
              value: function(t) {
                return (
                  !!this._$popup &&
                  !(this._$popup[0] !== t.target && !this._$popup[0].contains(t.target))
                )
              },
            },
          ]),
          t
        )
      })())
  },
  1219: function(t, e) {},
  1220: function(t, e) {},
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
  820: function(t, e, o) {
    'use strict'
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    var n, s, r, a, l
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.AddCompareDialog = void 0),
      (n = (function() {
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
      (s = o(1216)),
      (r = o(1218)),
      (a = o(1024)),
      o(1220),
      (l = null),
      (e.AddCompareDialog = (function() {
        function t(e) {
          i(this, t),
            (this._chartWidgetCollection = e),
            (this._$symbolSearchPopup = null),
            (this._dialog = null),
            (this._compareTab = new s.CompareTab(this._chartWidgetCollection, this)),
            (this._addSymbolTab = new r.AddSymbolTab(this._chartWidgetCollection, this))
        }
        return (
          n(t, [
            {
              key: 'show',
              value: function() {
                var t,
                  e = this,
                  o = []
                return (
                  o.push({
                    name: $.t('Compare'),
                    page: this._compareTab.$tab.addClass('tv-compare-dialog__tab-page'),
                  }),
                  o.push({
                    name: $.t('Add Symbol', { context: 'compare_or_add_symbol_dialog' }),
                    page: this._addSymbolTab.$tab.addClass('tv-compare-dialog__tab-page'),
                  }),
                  (t = (0, a.createTabbedDialog)({
                    tabs: o,
                    width: 400,
                    tabStateSaveKey: 'CompareAddDialog.tab',
                    destroyOnClose: !0,
                    withScroll: !1,
                    addClass: 'tv-compare-dialog',
                    tabsScrollBoxAddClass: 'tv-compare-dialog__scroll-box',
                    tabAddClass: 'tv-compare-dialog__tab',
                    isClickOutFn: function(t) {
                      if (e._compareTab.isClickOnTab(t) || e._addSymbolTab.isClickOnTab(t))
                        return !1
                    },
                  })),
                  l && l.close(),
                  (this._dialog = t.dialog),
                  this._dialog.open(),
                  (l = this._dialog),
                  this._dialog
                )
              },
            },
            {
              key: 'getZIndex',
              value: function() {
                return this._dialog.zIndex
              },
            },
          ]),
          t
        )
      })())
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
          o = d.width()
        for (u.width = o, u.height = d.height(), t = 0; t < p.length; t++)
          if (o <= u.breakpoints[p[t]]) {
            u.device !== p[t] &&
              ((e = u.device), (u.device = p[t]), u.trigger('changeDevice', [p[t], e]))
            break
          }
        return u
      }
      var r, a, l, c, d, h, u, p
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (r = o(301)),
        (a = n(r)),
        (l = o(838)),
        (c = $('body')),
        (d = $(window)),
        (h = 0),
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
            t && 1 == ++h
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
                h > 0 &&
                0 == --h &&
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
        d.on('resize', s),
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
          d = this
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
              d._bottomFixed ||
                d._dragging ||
                (d._options.alwaysVisible || d._$scrollBar.addClass('active'), d._onScroll())
            })
            .on('mouseleave.sidebar-scroll', function() {
              d._bottomFixed ||
                d._dragging ||
                (d._options.alwaysVisible || d._$scrollBar.removeClass('active'), d._onScroll())
            })
            .on('mousewheel.sidebar-scroll', function(t, e) {
              if (!t.isDefaultPrevented())
                return d.scroll(e, 'MozMousePixelScroll' === t.originalEvent.type ? 2 : null)
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
                : this._$content.css({
                    top: this._$content.position().top,
                    bottom: 'auto',
                  }),
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
        return 0 !== C.length
      }
      var c, d, h, u, p, f, _, g, b, v, y, m, C, w
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
        (e.isOpenedModals = l),
        (h = o(184)),
        (u = n(h)),
        (p = o(832)),
        (f = i(p)),
        (_ = o(690)),
        (g = o(305)),
        (b = o(189)),
        (v = n(b)),
        (y = o(307)),
        (m = n(y)),
        (C = []),
        (w = {
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
              (t = r(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, c({}, w, a)))),
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
                C.push(t)
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
            d(o, [
              {
                key: 'open',
                value: function() {
                  var t,
                    e = this
                  if (!this.opened)
                    return (
                      (this.opened = !0),
                      (this._shortCutsLockId = v.disable()),
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
                      this._shortCutsLockId && v.enable(this._shortCutsLockId),
                      this._keyboardBinderLockId && m.enable(this._keyboardBinderLockId),
                      this.trigger('beforeClose', [this]),
                      this.ajaxRequest && (this.ajaxRequest.abort(), delete this.ajaxRequest),
                      this.hideContent(),
                      this.$overlay.addClass('i-closed'),
                      setTimeout(function() {
                        e.$modalWrap.addClass('i-hidden').detach(),
                          e.$overlay.addClass('i-hidden').detach(),
                          (C = t.without(C, e)),
                          f.default.setFixedBodyState(!1),
                          e.trigger('afterClose', [e]),
                          e.unfocus(),
                          C.length > 0 && C[C.length - 1].focus(),
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
                    (this.spinner = new g.Spinner('large')),
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
        })(_.TVDialogAbstract))
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
      var d, h, u, p, f, _, g, b, v, y, m, C, w, k, T, S, x
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TVDialogAbstract = void 0),
        (d =
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
        (e.closeAllDialogs = c),
        (u = o(184)),
        (p = s(u)),
        o(840),
        (f = o(308)),
        (_ = n(f)),
        o(841),
        o(842),
        o(834),
        (g = o(301)),
        (b = n(g)),
        (v = 0),
        (y = []),
        (m = void 0),
        (C = 110),
        (w = $(document)),
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
        (S = {
          _default:
            '<div data-name="{{ name }}" class="js-dialog__action-click js-dialog__no-drag {{ class }}">{{ text }}</div>',
          'submit-success':
            '<button type="submit" class="tv-button tv-button--success">{{ text }}</button>',
        }),
        $(function() {
          k.$wrap = $(document.all && !document.querySelector ? 'html' : 'body')
        }),
        (x = (function(e) {
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
                e._id = v++,
                e.loadingActions = [],
                e.disabledActions = [],
                e.firstFocusControl = null,
                e.options = d({}, k, c),
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
                        ? ((i = new _.default({
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
                            t.render(c.template ? c.template : S[c.type] || S._default, c, c),
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
                              w.on('keydown', a), w.on('keyup', n)
                            }),
                            e.on('beforeClose', function() {
                              w.off('keydown', a), w.off('keyup', n)
                            }))
                          : ((l = $.isArray(c.key) ? c.key : [c.key]),
                            (n = function(t) {
                              !t.isDefaultPrevented() &&
                                e._focused &&
                                -1 !== l.indexOf(t.keyCode) &&
                                e.actionDispatcher(c.name)
                            }),
                            e.on('afterOpen', function() {
                              return w.on('keyup', n)
                            }),
                            e.on('beforeClose', function() {
                              return w.off('keyup', n)
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
              e.setZIndex(C + y.length),
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
            h(o, [
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
                  return this.setZIndex(C + y.length), this
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
                      w.on('mousedown.tv-dialog-unfocus-' + t._id, function(e) {
                        t.isEventOut(e) &&
                          (t.unfocus(), w.off('mousedown.tv-dialog-unfocus-' + t._id))
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
                    w.one('touchstart mousedown keydown', i),
                    this.trigger('error', [this, o]),
                    this
                  )
                },
              },
              {
                key: 'destroy',
                value: function() {
                  y = i.without(y, this)
                  for (var t = 0; t < y.length; t++) y[t].setZIndex(C + t)
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
        })(b.default)),
        (e.TVDialogAbstract = x),
        w.on('keyup.tv-dialog-esc', function(t) {
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
    var l, c, d, h, u, p, f, _, g, b, v, y, m
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
      (d = o(184)),
      (h = n(d)),
      (u = o(832)),
      (p = i(u)),
      (f = o(690)),
      (_ = o(833)),
      (g = o(827)),
      (b = $('body')),
      (v = $(window)),
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
              ((t.scroll = new _.SidebarCustomScroll(t.$scrollWrap, t.$scrollWrapInner)),
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
              t.opened ? (t.close(), setTimeout(e, h.dur / 2)) : e()
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
                            (e = v.height()),
                            (o = v.width()),
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
                          ((0, g.lazyJqueryUI)(t.$el).draggable({
                            handle: '.js-dialog__drag',
                            cancel:
                              'input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close',
                            containment: 'window',
                            cursor: '-webkit-grabbing',
                          }),
                          t.$el.find('.js-dialog__drag').addClass('tv-dialog__grab')),
                        t.trigger('afterOpen', [t]))
                    }),
                    v.on('resize.tv-popup-' + this.id, function() {
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
                        ((0, g.lazyJqueryUI)(t.$el)
                          .draggable('instance')
                          .then(function(t) {
                            t && t.destroy()
                          }),
                        t.$el.addClass('i-hidden').detach(),
                        b.css('cursor', 'auto'),
                        t.trigger('afterClose', [t]),
                        t.options.destroyOnClose && t.destroy())
                    }),
                    v.off('resize.tv-popup-' + this.id),
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
  873: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>'
  },
  973: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>'
  },
})
