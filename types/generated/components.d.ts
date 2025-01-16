import type { Schema, Struct } from '@strapi/strapi';

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface UiExample extends Struct.ComponentSchema {
  collectionName: 'components_ui_examples';
  info: {
    description: '';
    displayName: 'Example';
    icon: 'folder';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface UiGallery extends Struct.ComponentSchema {
  collectionName: 'components_ui_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
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
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface UiPrikladiRobit extends Struct.ComponentSchema {
  collectionName: 'components_ui_prikladi_robit';
  info: {
    displayName: '\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u0438 \u0440\u043E\u0431\u0456\u0442';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface UiTextSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_text_sections';
  info: {
    description: '';
    displayName: 'TextSection';
    icon: 'layout';
  };
  attributes: {
    bottomText: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.button': UiButton;
      'ui.example': UiExample;
      'ui.gallery': UiGallery;
      'ui.hero': UiHero;
      'ui.prikladi-robit': UiPrikladiRobit;
      'ui.text-section': UiTextSection;
    }
  }
}
