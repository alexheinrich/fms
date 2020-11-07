/* Declares the fms Audio Worklet Processor */

class fms_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.fms;
    super(options);
  }
}

registerProcessor("fms", fms_AWP);
