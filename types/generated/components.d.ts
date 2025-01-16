import type { Schema, Struct } from '@strapi/strapi';

export interface UiAbout extends Struct.ComponentSchema {
  collectionName: 'components_ui_abouts';
  info: {
    description: '';
    displayName: 'about';
  };
  attributes: {
    bottomText: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface UiExamples extends Struct.ComponentSchema {
  collectionName: 'components_ui_examples';
  info: {
    description: '';
    displayName: 'examples';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface UiGallery extends Struct.ComponentSchema {
  collectionName: 'components_ui_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface UiHero extends Struct.ComponentSchema {
  collectionName: 'components_ui_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.String;
  };
}

export interface UiImages extends Struct.ComponentSchema {
  collectionName: 'components_ui_images';
  info: {
    description: '';
    displayName: 'images';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiMain extends Struct.ComponentSchema {
  collectionName: 'components_ui_mains';
  info: {
    description: '';
    displayName: 'main';
  };
  attributes: {
    bottomText: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiMasterclass extends Struct.ComponentSchema {
  collectionName: 'components_ui_masterclasses';
  info: {
    description: '';
    displayName: 'masterclass';
  };
  attributes: {
    bottomText: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiPayment extends Struct.ComponentSchema {
  collectionName: 'components_ui_payments';
  info: {
    displayName: 'payment';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiPersonalSpider extends Struct.ComponentSchema {
  collectionName: 'components_ui_personal_spiders';
  info: {
    description: '';
    displayName: 'personalSpider';
  };
  attributes: {
    bottomText: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiShipping extends Struct.ComponentSchema {
  collectionName: 'components_ui_shippings';
  info: {
    displayName: 'shipping';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.about': UiAbout;
      'ui.button': UiButton;
      'ui.examples': UiExamples;
      'ui.gallery': UiGallery;
      'ui.hero': UiHero;
      'ui.images': UiImages;
      'ui.main': UiMain;
      'ui.masterclass': UiMasterclass;
      'ui.payment': UiPayment;
      'ui.personal-spider': UiPersonalSpider;
      'ui.shipping': UiShipping;
    }
  }
}
