import {
  ColorPalette,
  FontSizePicker,
  PanelBody,
  PanelRow,
  ToggleControl,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

const NAME = "core/paragraph";

export function addAttributes(settings) {
  if (settings.name != NAME) return settings;

  const newAttributes = {
    paddingLeft: { default: 0 },
    borderColor: { default: "blue" },
    isLeftBorder: { type: "boolean", default: false },
  };
  return {
    ...settings,
    attributes: { ...settings.attributes, ...newAttributes },
  };
}

export function withAdvancedEdit(BlockEdit) {
  return (props) => {
    if (props.name != NAME) return <BlockEdit {...props} />;

    const { attributes, setAttributes } = props;
    const { borderColor, paddingLeft, isLeftBorder } = attributes;

    const paddingLeftSizes = [
      { name: "none", size: 0 },
      { name: "small", size: 10 },
      { name: "medium", size: 20 },
    ];

    const borderColors = [{ name: "blue", color: "blue" }];

    let style = {};
    if (isLeftBorder)
      style = {
        padding: "10px",
        paddingLeft: `${paddingLeft}px`,
        borderLeft: `6px solid ${borderColor}`,
      };

    const blockProps = useBlockProps({ style: style });

    return (
      <Fragment>
        <div {...blockProps}>
          <BlockEdit {...props} />
        </div>
        <InspectorControls>
          <PanelBody title="Left Border" initialOpen={true}>
            <PanelRow>
              <ToggleControl
                checked={isLeftBorder}
                label="Enable Left Border"
                onChange={() => setAttributes({ isLeftBorder: !isLeftBorder })}
              />
            </PanelRow>
            {isLeftBorder && (
              <PanelRow>
                <FontSizePicker
                  value={paddingLeft}
                  onChange={(val) => setAttributes({ paddingLeft: val })}
                  fontSizes={paddingLeftSizes}
                />
              </PanelRow>
            )}
            {isLeftBorder && (
              <PanelRow>
                <ColorPalette
                  colors={borderColors}
                  value={borderColor}
                  onChange={(val) => setAttributes({ borderColor: val })}
                />
              </PanelRow>
            )}
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}
