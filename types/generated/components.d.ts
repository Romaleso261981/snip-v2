import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'videos' | 'audios' | 'files'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface UiGalary extends Struct.ComponentSchema {
  collectionName: 'components_ui_galaries';
  info: {
    description: '';
    displayName: 'gallery';
  };
  attributes: {
    galleryCard: Schema.Attribute.Component<'ui.galary-card', true>;
  };
}

export interface UiGalaryCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_galary_cards';
  info: {
    description: '';
    displayName: 'galaryCard';
  };
  attributes: {
    cost: Schema.Attribute.Decimal;
    count: Schema.Attribute.Integer;
    currency: Schema.Attribute.String;
    href: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface UiHero extends Struct.ComponentSchema {
  collectionName: 'components_ui_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heroBg: Schema.Attribute.Media<'images'>;
    heroTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'ui.button': UiButton;
      'ui.galary': UiGalary;
      'ui.galary-card': UiGalaryCard;
      'ui.hero': UiHero;
    }
  }
}
