#pragma once

#include "PluginProcessor.h"
#include <juce_gui_extra/juce_gui_extra.h>

namespace webview_plugin {
class AudioPluginAudioProcessorEditor final : public juce::AudioProcessorEditor
{
public:
    explicit AudioPluginAudioProcessorEditor (AudioPluginAudioProcessor&);
    ~AudioPluginAudioProcessorEditor() override;

    void resized() override;

private:
    // This reference is provided as a quick way for your editor to
    // access the processor object that created it.
    AudioPluginAudioProcessor& processorRef;

    juce::WebBrowserComponent webView;

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (AudioPluginAudioProcessorEditor)
};

} // namespace webview_plugin