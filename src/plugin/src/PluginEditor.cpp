#include "JuceWebViewPlugin/PluginProcessor.h"
#include "JuceWebViewPlugin/PluginEditor.h"

namespace webview_plugin {

//==============================================================================
AudioPluginAudioProcessorEditor::AudioPluginAudioProcessorEditor (AudioPluginAudioProcessor& p)
    : AudioProcessorEditor (&p), processorRef (p),
    // NOTE: Additional permissions may be needed for Windows + WebView2 + production plugins.
    // See https://www.youtube.com/watch?v=0ALLRitFE34&list=PLrJPU5Myec8Z-8gEj3kJdMfuuuWFbpy7D&index=1
    //   16:30 and onward for more information.
    webView(juce::WebBrowserComponent::Options{}
        .withBackend(juce::WebBrowserComponent::Options::Backend::webview2)) 
{
    juce::ignoreUnused (processorRef);

    addAndMakeVisible(webView);
    // Make sure that before the constructor has finished, you've set the
    // editor's size to whatever you need it to be.
    setResizable(true, true);
    setSize (800, 600);

    webView.goToURL("https://www.google.com");
}

AudioPluginAudioProcessorEditor::~AudioPluginAudioProcessorEditor()
{
}


void AudioPluginAudioProcessorEditor::resized()
{
    webView.setBounds(getLocalBounds());
}

} // namespace webview_plugin