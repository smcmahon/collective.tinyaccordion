Introduction
============

`Plomino <http://www.plomino.net>`_ is a powerful and flexible web-based application builder built on Plone.

One of Plomino's many, many features is a TinyMCE extension which makes it easy to add accordion sections in body text.

collective.tinyaccordion extracts that accordion feature and makes it available as a stand-alone package. If you use this package and later find that you wish to use the complete Plomino package, just remove this package from your buildout.

plomino.tinymce is distributed under the GPL, v 2. So is this package.

Plomino Credits
===============

Companies
---------
|makinacom|_

  * `Planet Makina Corpus <http://www.makina-corpus.org>`_
  * `Contact us <mailto:python@makina-corpus.org>`_

.. |makinacom| image:: http://depot.makina-corpus.org/public/logo.gif
.. _makinacom:  http://www.makina-corpus.com

Authors
------------

- Romaric Breil <romaric.breil@supinfo.com>
- Eric Brehault <eric.brehault@makina-corpus.com>
- Makina Corpus <python@makina-corpus.com>

Contributors
-----------------

- Alessandro Pisa <alessandro.pisa@redturtle.it>
- Mathieu Pasquet <kiorky@cryptelium.net>

Accordions Management
=====================

(from the plomino.tinymce README)

JQuery UI integration allows to include accordions in Plomino forms. An
accordion contains parts of a web page that can be collapsed or expanded when the
user clicks on the title of this zone.

This plugin allows to add up to four recursive ranges of accordions in a form,
and to remove an accordion section. To add a range, simply highlight a part of
the form, then click on the button "Plomino Accordion", enter the section
title, and apply.

To remove a part, place the cursor in a section (a red frame), without
selecting text, and click on the same button.
