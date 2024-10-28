juce_add_plugin(JuceWebViewPlugin
    COMPANY_NAME NoCompanyAtAll
    IS_SYNTH FALSE
    NEEDS_MIDI_INPUT
    NEEDS_MIDI_OUTPUT FAIL_REGULAR_EXPRESSION
    PLUGIN_MANUFACTURER_CODE MWSW
    PLUGIN_CODE ADCA
    NEEDS_WEBVIEW2 TRUE
    # You'd likelky want to add AU/VST3 formats here
    FORMATS Standalone
)

 target_sources(JuceWebViewPlugin
     PRIVATE
         src/PluginEditor.cpp
         src/PluginProcessor.cpp
 )

 target_include_directories(JuceWebViewPlugin
     PRIVATE
         include
 )

 target_link_libraries(JuceWebViewPlugin
     PRIVATE
         juce::juce_audio_utils
    PUBLIC
        juce::juce_recommended_lto_flags
        juce::juce_recommended_config_flags
        juce::juce_recommended_warning_flags
 )

 target_compile_definitions(JuceWebViewPlugin
     PUBLIC
         JUCE_WEB_BROWSER=1
         JUCE_USE_CURL=0
         JUCE_VST3_CAN_REPLACE_VST2=0
         JUCE_USE_WIN_WEBVIEW2_WITH_STATIC_LINKING=1
 )