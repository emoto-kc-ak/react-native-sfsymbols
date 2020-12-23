#import "RNSFSymbol.h"
#import "UISFSymbolImageView.h"
#import <UIKit/UIKit.h>
#import <React/RCTViewManager.h>

@interface RNSFSymbolManager : RCTViewManager
@end

@implementation RNSFSymbolManager

RCT_EXPORT_MODULE(RNSFSymbol)

- (UIView *)view
{
  UISFSymbolImageView *imageView = [[UISFSymbolImageView alloc] initWithImage:nil];
  // @todo customize content mode?
  [imageView setContentMode:UIViewContentModeScaleAspectFit];
  return imageView;
}

RCT_CUSTOM_VIEW_PROPERTY(multicolor, BOOL, UISFSymbolImageView)
{
  if (json) {
    view.multicolor = [RCTConvert BOOL:json];
  } else {
    view.multicolor = defaultView.multicolor;
  }
  [view updateImage];
}

RCT_CUSTOM_VIEW_PROPERTY(systemName, NSString, UISFSymbolImageView)
{
  if (json) {
    view.systemName = [RCTConvert NSString:json];
  } else {
    view.systemName = defaultView.systemName;
  }
  [view updateImage];
}

RCT_CUSTOM_VIEW_PROPERTY(color, UIColor, UISFSymbolImageView) {
  if (json) {
    view.tintColor = [RCTConvert UIColor:json];
  } else {
    view.tintColor = defaultView.tintColor;
  }
  [view updateImage];
}

RCT_CUSTOM_VIEW_PROPERTY(scale, NSString, UISFSymbolImageView) {
  if (json) {
    view.scale = [RCTConvert NSString:json];
  } else {
    view.scale = defaultView.scale;
  }
  [view updateImage];
}

RCT_CUSTOM_VIEW_PROPERTY(weight, NSString, UISFSymbolImageView) {
  if (json) {
    view.weight = [RCTConvert NSString:json];
  } else {
    view.weight = defaultView.weight;
  }
  [view updateImage];
}

@end
