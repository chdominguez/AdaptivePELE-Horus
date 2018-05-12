Search.setIndex({docnames:["AdaptivePELE","AdaptivePELE.analysis","AdaptivePELE.atomset","AdaptivePELE.clustering","AdaptivePELE.simulation","AdaptivePELE.spawning","AdaptivePELE.utilities","AdaptivePELE.validator","Changelog","Examples","index"],envversion:52,filenames:["AdaptivePELE.rst","AdaptivePELE.analysis.rst","AdaptivePELE.atomset.rst","AdaptivePELE.clustering.rst","AdaptivePELE.simulation.rst","AdaptivePELE.spawning.rst","AdaptivePELE.utilities.rst","AdaptivePELE.validator.rst","Changelog.rst","Examples.rst","index.rst"],objects:{"AdaptivePELE.adaptiveSampling":{buildNewClusteringAndWriteInitialStructuresInNewSimulation:[0,1,1,""],buildNewClusteringAndWriteInitialStructuresInRestart:[0,1,1,""],checkIntegrityClusteringObject:[0,1,1,""],checkMetricExitConditionMultipleTrajsinRestart:[0,1,1,""],checkSymmetryDict:[0,1,1,""],clusterEpochTrajs:[0,1,1,""],clusterPreviousEpochs:[0,1,1,""],copyInitialStructures:[0,1,1,""],expandInitialStructuresWildcard:[0,1,1,""],filterClustersAccordingToBox:[0,1,1,""],findFirstRun:[0,1,1,""],fixReportsSymmetry:[0,1,1,""],generateTrajectorySelectionString:[0,1,1,""],getWorkingClusteringObjectAndReclusterIfNecessary:[0,1,1,""],loadParams:[0,1,1,""],main:[0,1,1,""],mergeFilteredClustersAccordingToBox:[0,1,1,""],needToRecluster:[0,1,1,""],parseArgs:[0,1,1,""],preparePeleControlFile:[0,1,1,""],saveInitialControlFile:[0,1,1,""],writeTopologyFile:[0,1,1,""]},"AdaptivePELE.analysis":{correctRMSD:[1,0,0,"-"],foldersFirstBindingEvent:[1,0,0,"-"],makePNGs:[1,0,0,"-"],plotAdaptive:[1,0,0,"-"],writeClusteringStructures:[1,0,0,"-"],writePrecisePathToSnapshot:[1,0,0,"-"]},"AdaptivePELE.analysis.correctRMSD":{extendReportWithRmsd:[1,1,1,""],main:[1,1,1,""],parseArguments:[1,1,1,""],readControlFile:[1,1,1,""]},"AdaptivePELE.analysis.foldersFirstBindingEvent":{main:[1,1,1,""],parseArguments:[1,1,1,""]},"AdaptivePELE.analysis.makePNGs":{parseArguments:[1,1,1,""]},"AdaptivePELE.analysis.plotAdaptive":{generateNestedString:[1,1,1,""],generatePrintString:[1,1,1,""],parseArguments:[1,1,1,""]},"AdaptivePELE.analysis.writeClusteringStructures":{main:[1,1,1,""],parseArgs:[1,1,1,""]},"AdaptivePELE.analysis.writePrecisePathToSnapshot":{parseArguments:[1,1,1,""]},"AdaptivePELE.atomset":{RMSDCalculator:[2,0,0,"-"],SymmetryContactMapEvaluator:[2,0,0,"-"],atomset:[2,0,0,"-"]},"AdaptivePELE.atomset.RMSDCalculator":{RMSDCalculator:[2,2,1,""]},"AdaptivePELE.atomset.RMSDCalculator.RMSDCalculator":{computeNonSymmAtoms:[2,3,1,""],computeRMSD2:[2,3,1,""],computeRMSD:[2,3,1,""],nonSymmetricalAtomsSet:[2,4,1,""],symmetries:[2,4,1,""]},"AdaptivePELE.atomset.SymmetryContactMapEvaluator":{SymmetryContactMapEvaluator:[2,2,1,""],calculateCorrelationContactMaps:[2,1,1,""]},"AdaptivePELE.atomset.SymmetryContactMapEvaluator.SymmetryContactMapEvaluator":{buildContactMap:[2,3,1,""],buildContactMapWithRowMap:[2,3,1,""],buildOptimalPermutationContactMap:[2,3,1,""],createContactMap:[2,3,1,""],evaluateCorrelation:[2,3,1,""],evaluateDifferenceDistance:[2,3,1,""],evaluateJaccard:[2,3,1,""],ligandList:[2,4,1,""],proteinList:[2,4,1,""],symToRowMap:[2,4,1,""],symmetricAtoms:[2,4,1,""],symmetries:[2,4,1,""]},"AdaptivePELE.atomset.atomset":{Atom:[2,2,1,""],PDB:[2,2,1,""],computeCOMDifference:[2,1,1,""],computeCOMSquaredDifference:[2,1,1,""],computeSquaredCentroidDifference:[2,1,1,""],readPDB:[2,1,1,""]},"AdaptivePELE.atomset.atomset.Atom":{atomSerial:[2,4,1,""],equivalentResname:[2,3,1,""],getAtomCoords:[2,3,1,""],id:[2,4,1,""],isHeavyAtom:[2,3,1,""],isHeteroAtom:[2,3,1,""],isProtein:[2,3,1,""],mass:[2,4,1,""],name:[2,4,1,""],printAtom:[2,3,1,""],protein:[2,4,1,""],resChain:[2,4,1,""],resname:[2,4,1,""],resnum:[2,4,1,""],set_properties:[2,3,1,""],squaredDistance:[2,3,1,""],type:[2,4,1,""],x:[2,4,1,""],y:[2,4,1,""],z:[2,4,1,""]},"AdaptivePELE.atomset.atomset.PDB":{ATOM_LINE_TEMPLATE:[2,4,1,""],CMAtoms:[2,4,1,""],atomList:[2,4,1,""],atoms:[2,4,1,""],centroid:[2,4,1,""],com:[2,4,1,""],computeTotalMass:[2,3,1,""],countContacts:[2,3,1,""],createSelectionString:[2,3,1,""],extractCOM:[2,3,1,""],extractCentroid:[2,3,1,""],getAtom:[2,3,1,""],getCOM:[2,3,1,""],getCentroid:[2,3,1,""],getNumberOfAtoms:[2,3,1,""],get_pdb_string:[2,3,1,""],initialise:[2,3,1,""],isfromPDBFile:[2,3,1,""],ispdb:[2,4,1,""],join_PDB_lines:[2,3,1,""],pdb:[2,4,1,""],printAtoms:[2,3,1,""],totalMass:[2,4,1,""],updateCoords:[2,3,1,""],writePDB:[2,3,1,""]},"AdaptivePELE.automateRoundsAdaptive":{automateSimulation:[0,1,1,""],main:[0,1,1,""],parseArguments:[0,1,1,""]},"AdaptivePELE.clustering":{clustering:[3,0,0,"-"],clusteringTypes:[3,0,0,"-"],thresholdcalculator:[3,0,0,"-"],thresholdcalculatortypes:[3,0,0,"-"]},"AdaptivePELE.clustering.clustering":{AltStructures:[3,2,1,""],CMClusteringEvaluator:[3,2,1,""],CMSimilarityEvaluator:[3,2,1,""],Cluster:[3,2,1,""],Clustering:[3,2,1,""],ClusteringBuilder:[3,2,1,""],ClusteringEvaluator:[3,2,1,""],Clusters:[3,2,1,""],ConformationNetwork:[3,2,1,""],ContactMapAccumulativeClustering:[3,2,1,""],ContactsClustering:[3,2,1,""],ContactsClusteringEvaluator:[3,2,1,""],SequentialLastSnapshotClustering:[3,2,1,""],getAllTrajectories:[3,1,1,""],similarityEvaluatorBuilder:[3,2,1,""]},"AdaptivePELE.clustering.clustering.AltStructures":{addStructure:[3,3,1,""],altSpawnSelection:[3,3,1,""],cleanPQ:[3,3,1,""],sizePQ:[3,3,1,""],updateIndex:[3,3,1,""]},"AdaptivePELE.clustering.clustering.CMClusteringEvaluator":{checkAttributes:[3,3,1,""],getInnerLimit:[3,3,1,""],isElement:[3,3,1,""],limitMax:[3,4,1,""],limitSlope:[3,4,1,""]},"AdaptivePELE.clustering.clustering.CMSimilarityEvaluator":{isSimilarCluster:[3,3,1,""]},"AdaptivePELE.clustering.clustering.Cluster":{addElement:[3,3,1,""],getContacts:[3,3,1,""],getMetric:[3,3,1,""],getMetricFromColumn:[3,3,1,""],printCluster:[3,3,1,""],writePDB:[3,3,1,""],writeSpawningStructure:[3,3,1,""]},"AdaptivePELE.clustering.clustering.Clustering":{addSnapshotToCluster:[3,3,1,""],cluster:[3,3,1,""],clusterIterator:[3,3,1,""],emptyClustering:[3,3,1,""],getCluster:[3,3,1,""],getNumberClusters:[3,3,1,""],getOptimalMetric:[3,3,1,""],setCol:[3,3,1,""],writeClusterMetric:[3,3,1,""],writeConformationNodePopulation:[3,3,1,""],writeOutput:[3,3,1,""],writePathwayOptimalCluster:[3,3,1,""],writePathwayTrajectory:[3,3,1,""]},"AdaptivePELE.clustering.clustering.ClusteringBuilder":{buildClustering:[3,3,1,""]},"AdaptivePELE.clustering.clustering.ClusteringEvaluator":{cleanContactMap:[3,3,1,""]},"AdaptivePELE.clustering.clustering.Clusters":{addCluster:[3,3,1,""],getCluster:[3,3,1,""],getNumberClusters:[3,3,1,""],insertCluster:[3,3,1,""],printClusters:[3,3,1,""]},"AdaptivePELE.clustering.clustering.ConformationNetwork":{add_edge:[3,3,1,""],add_node:[3,3,1,""],createPathwayToCluster:[3,3,1,""],writeConformationNetwork:[3,3,1,""],writeFDT:[3,3,1,""]},"AdaptivePELE.clustering.clustering.ContactsClusteringEvaluator":{checkAttributes:[3,3,1,""],getInnerLimit:[3,3,1,""],isElement:[3,3,1,""]},"AdaptivePELE.clustering.clustering.SequentialLastSnapshotClustering":{addSnapshotToCluster:[3,3,1,""],cluster:[3,3,1,""]},"AdaptivePELE.clustering.clustering.similarityEvaluatorBuilder":{build:[3,3,1,""]},"AdaptivePELE.clustering.clusteringTypes":{CLUSTERING_TYPES:[3,2,1,""],SIMILARITY_TYPES:[3,2,1,""]},"AdaptivePELE.clustering.clusteringTypes.CLUSTERING_TYPES":{contactMap:[3,4,1,""],lastSnapshot:[3,4,1,""],rmsd:[3,4,1,""]},"AdaptivePELE.clustering.clusteringTypes.SIMILARITY_TYPES":{Jaccard:[3,4,1,""],correlation:[3,4,1,""],differenceDistance:[3,4,1,""]},"AdaptivePELE.clustering.thresholdcalculator":{ThresholdCalculator:[3,2,1,""],ThresholdCalculatorBuilder:[3,2,1,""],ThresholdCalculatorConstant:[3,2,1,""],ThresholdCalculatorHeaviside:[3,2,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculator":{calculate:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculatorBuilder":{build:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculatorConstant":{calculate:[3,3,1,""],getMaxThreshold:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculatorHeaviside":{calculate:[3,3,1,""],getMaxThreshold:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculatortypes":{THRESHOLD_CALCULATOR_TYPES:[3,2,1,""]},"AdaptivePELE.clustering.thresholdcalculatortypes.THRESHOLD_CALCULATOR_TYPES":{constant:[3,4,1,""],heaviside:[3,4,1,""]},"AdaptivePELE.simulation":{simulationTypes:[4,0,0,"-"],simulationrunner:[4,0,0,"-"]},"AdaptivePELE.simulation.simulationTypes":{EXITCONDITION_TYPE:[4,2,1,""],SIMULATION_TYPE:[4,2,1,""]},"AdaptivePELE.simulation.simulationTypes.EXITCONDITION_TYPE":{CLUSTERING:[4,4,1,""],METRIC:[4,4,1,""],METRICMULTIPLETRAJS:[4,4,1,""]},"AdaptivePELE.simulation.simulationTypes.SIMULATION_TYPE":{MD:[4,4,1,""],PELE:[4,4,1,""],TEST:[4,4,1,""]},"AdaptivePELE.simulation.simulationrunner":{ClusteringExitCondition:[4,2,1,""],ExitConditionBuilder:[4,2,1,""],MetricExitCondition:[4,2,1,""],MetricMultipleTrajsExitCondition:[4,2,1,""],PeleSimulation:[4,2,1,""],RunnerBuilder:[4,2,1,""],SimulationParameters:[4,2,1,""],SimulationRunner:[4,2,1,""],TestSimulation:[4,2,1,""]},"AdaptivePELE.simulation.simulationrunner.ClusteringExitCondition":{checkExitCondition:[4,3,1,""]},"AdaptivePELE.simulation.simulationrunner.ExitConditionBuilder":{build:[4,3,1,""]},"AdaptivePELE.simulation.simulationrunner.MetricExitCondition":{checkExitCondition:[4,3,1,""]},"AdaptivePELE.simulation.simulationrunner.MetricMultipleTrajsExitCondition":{checkExitCondition:[4,3,1,""]},"AdaptivePELE.simulation.simulationrunner.PeleSimulation":{calculateEquilibrationLength:[4,3,1,""],clusterEquilibrationStructures:[4,3,1,""],createMultipleComplexesFilenames:[4,3,1,""],createSymbolicLinks:[4,3,1,""],equilibrate:[4,3,1,""],getEquilibrationControlFile:[4,3,1,""],getMetricColumns:[4,3,1,""],getNextIterationBox:[4,3,1,""],runSimulation:[4,3,1,""],selectEquilibratedStructure:[4,3,1,""],selectEquilibrationLastSnapshot:[4,3,1,""],selectInitialBoxCenter:[4,3,1,""]},"AdaptivePELE.simulation.simulationrunner.RunnerBuilder":{build:[4,3,1,""]},"AdaptivePELE.simulation.simulationrunner.SimulationRunner":{checkExitCondition:[4,3,1,""],createMultipleComplexesFilenames:[4,3,1,""],hasExitCondition:[4,3,1,""],makeWorkingControlFile:[4,3,1,""],readMappingFromDisk:[4,3,1,""],runSimulation:[4,3,1,""],setZeroMapping:[4,3,1,""],updateMappingProcessors:[4,3,1,""],writeMappingToDisk:[4,3,1,""]},"AdaptivePELE.simulation.simulationrunner.TestSimulation":{makeWorkingControlFile:[4,3,1,""],runSimulation:[4,3,1,""]},"AdaptivePELE.spawning":{densitycalculator:[5,0,0,"-"],densitycalculatortypes:[5,0,0,"-"],spawning:[5,0,0,"-"],spawningTypes:[5,0,0,"-"]},"AdaptivePELE.spawning.densitycalculator":{ContinuousDensityCalculator:[5,2,1,""],DensityCalculator:[5,2,1,""],DensityCalculatorBuilder:[5,2,1,""],DensityCalculatorHeaviside:[5,2,1,""],ExitContinousDensityCalculator:[5,2,1,""],NullDensityCalculator:[5,2,1,""],continousDensity:[5,1,1,""]},"AdaptivePELE.spawning.densitycalculator.ContinuousDensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.DensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.DensityCalculatorBuilder":{build:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.DensityCalculatorHeaviside":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.ExitContinousDensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.NullDensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculatortypes":{DENSITY_CALCULATOR_TYPES:[5,2,1,""]},"AdaptivePELE.spawning.densitycalculatortypes.DENSITY_CALCULATOR_TYPES":{"null":[5,4,1,""],continuous:[5,4,1,""],exitContinous:[5,4,1,""],heaviside:[5,4,1,""]},"AdaptivePELE.spawning.spawning":{DensitySpawningCalculator:[5,2,1,""],EpsilonDegeneracyCalculator:[5,2,1,""],FASTDegeneracyCalculator:[5,2,1,""],IndependentRunsCalculator:[5,2,1,""],InverselyProportionalToPopulationCalculator:[5,2,1,""],NullSpawningCalculator:[5,2,1,""],REAPCalculator:[5,2,1,""],SameWeightDegeneracyCalculator:[5,2,1,""],SimulatedAnnealingCalculator:[5,2,1,""],SpawningAlgorithmBuilder:[5,2,1,""],SpawningBuilder:[5,2,1,""],SpawningCalculator:[5,2,1,""],SpawningParams:[5,2,1,""],UCBCalculator:[5,2,1,""],VariableEpsilonDegeneracyCalculator:[5,2,1,""],calculateContactsVar:[5,1,1,""],getSizes:[5,1,1,""],return_sign:[5,1,1,""],reward:[5,1,1,""]},"AdaptivePELE.spawning.spawning.DensitySpawningCalculator":{calculateDensities:[5,3,1,""]},"AdaptivePELE.spawning.spawning.EpsilonDegeneracyCalculator":{calculate:[5,3,1,""],divideProcessorsMetricProportional:[5,3,1,""],log:[5,3,1,""]},"AdaptivePELE.spawning.spawning.FASTDegeneracyCalculator":{calculate:[5,3,1,""],calculateNormalisedMetrics:[5,3,1,""],calculateNormalisedSizes:[5,3,1,""],log:[5,3,1,""],normaliseArray:[5,3,1,""]},"AdaptivePELE.spawning.spawning.IndependentRunsCalculator":{calculate:[5,3,1,""],log:[5,3,1,""],writeSpawningInitialStructures:[5,3,1,""]},"AdaptivePELE.spawning.spawning.InverselyProportionalToPopulationCalculator":{calculate:[5,3,1,""],log:[5,3,1,""]},"AdaptivePELE.spawning.spawning.NullSpawningCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.spawning.REAPCalculator":{calculate:[5,3,1,""],log:[5,3,1,""]},"AdaptivePELE.spawning.spawning.SameWeightDegeneracyCalculator":{calculate:[5,3,1,""],log:[5,3,1,""]},"AdaptivePELE.spawning.spawning.SimulatedAnnealingCalculator":{calculate:[5,3,1,""],computeTemperature:[5,3,1,""],log:[5,3,1,""]},"AdaptivePELE.spawning.spawning.SpawningAlgorithmBuilder":{build:[5,3,1,""]},"AdaptivePELE.spawning.spawning.SpawningBuilder":{buildSpawningCalculator:[5,3,1,""]},"AdaptivePELE.spawning.spawning.SpawningCalculator":{calculate:[5,3,1,""],divideInverselyProportionalToArray:[5,3,1,""],divideProportionalToArray:[5,3,1,""],divideTrajAccordingToWeights:[5,3,1,""],getMetrics:[5,3,1,""],log:[5,3,1,""],writeSpawningInitialStructures:[5,3,1,""]},"AdaptivePELE.spawning.spawning.SpawningParams":{buildSpawningParameters:[5,3,1,""]},"AdaptivePELE.spawning.spawning.UCBCalculator":{calculate:[5,3,1,""],log:[5,3,1,""]},"AdaptivePELE.spawning.spawning.VariableEpsilonDegeneracyCalculator":{calculate:[5,3,1,""],calculateEpsilonValue:[5,3,1,""],contactsVariation:[5,3,1,""],linearVariation:[5,3,1,""],logVariableEpsilon:[5,3,1,""]},"AdaptivePELE.spawning.spawningTypes":{EPSILON_VARIATION_TYPES:[5,2,1,""],SPAWNING_TYPES:[5,2,1,""]},"AdaptivePELE.spawning.spawningTypes.EPSILON_VARIATION_TYPES":{contactsVariation:[5,4,1,""],linearVariation:[5,4,1,""]},"AdaptivePELE.spawning.spawningTypes.SPAWNING_TYPES":{"null":[5,4,1,""],FAST:[5,4,1,""],REAP:[5,4,1,""],UCB:[5,4,1,""],epsilon:[5,4,1,""],independent:[5,4,1,""],inverselyProportional:[5,4,1,""],sameWeight:[5,4,1,""],simulatedAnnealing:[5,4,1,""],variableEpsilon:[5,4,1,""]},"AdaptivePELE.utilities":{clusteringUtilities:[6,0,0,"-"],utilities:[6,0,0,"-"]},"AdaptivePELE.utilities.clusteringUtilities":{writeStructures:[6,1,1,""]},"AdaptivePELE.utilities.utilities":{assertSymmetriesDict:[6,1,1,""],calculateContactMapEigen:[6,1,1,""],cleanup:[6,1,1,""],convert_trajectory_to_pdb:[6,1,1,""],distanceCOM:[6,1,1,""],ensure_connectivity_msm:[6,1,1,""],gen_atom_name:[6,1,1,""],getAtomNames:[6,1,1,""],getMetricsFromReportsInEpoch:[6,1,1,""],getPELEControlFileDict:[6,1,1,""],getRMSD:[6,1,1,""],getReportAndTrajectoryWildcard:[6,1,1,""],getSASAcolumnFromControlFile:[6,1,1,""],getSnapshots:[6,1,1,""],getSortedEigen:[6,1,1,""],getStationaryDistr:[6,1,1,""],getTopologyFile:[6,1,1,""],getTrajNum:[6,1,1,""],get_epoch_folders:[6,1,1,""],get_mdtraj_object_PDBstring:[6,1,1,""],makeFolder:[6,1,1,""],readClusteringObject:[6,1,1,""],sign:[6,1,1,""],write_PDB_clusters:[6,1,1,""],write_mdtraj_object_PDB:[6,1,1,""],write_xtc_to_pdb:[6,1,1,""]},"AdaptivePELE.validator":{controlFileValidator:[7,0,0,"-"]},"AdaptivePELE.validator.controlFileValidator":{validate:[7,1,1,""],validateBlock:[7,1,1,""],validateGeneralBlock:[7,1,1,""]},AdaptivePELE:{__init__:[0,0,0,"-"],adaptiveSampling:[0,0,0,"-"],automateRoundsAdaptive:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"3ptb":9,"3ptb_a_1000":9,"4th":9,"500x":8,"abstract":5,"boolean":[2,9],"case":[0,3,5,9],"class":[2,3,4,5],"default":[3,9],"export":9,"final":9,"float":[1,2,3,5,6,9],"function":[2,5,6,8,9],"import":9,"int":[0,1,2,3,4,5,6,9],"new":[0,3,9],"null":[5,8,9],"return":[0,1,2,3,4,5,6,7,9],"short":[4,9],"true":[0,2,3,4,6,9],"while":9,Added:8,CYS:2,For:9,HIS:[2,9],Has:2,ILE:2,LYS:2,Not:1,One:9,The:[0,2,3,5,6,8,9],There:9,These:9,__version__:8,abl:8,abov:9,accept:9,accod:4,accord:[3,5,8,9],account:[0,1,9],accumul:3,adapt:[0,1,5,6,7,9],adaptivepel:[1,2,3,4,5,6,7,9],adaptivesampl:[9,10],add:[0,3,6,8,9],add_edg:3,add_nod:3,addclust:3,added:[3,8,9],addel:3,addit:3,addition:9,additionali:9,addsnapshottoclust:3,addstructur:3,advantag:9,aen:9,affect:9,after:[0,9],again:9,against:[6,9],aim:9,ala:2,algorithm:[3,8,9],all:[0,1,2,3,4,6,8,9],alloc:5,along:9,alpha:[2,3],also:9,altern:[3,8,9],alternativestructur:9,although:9,altselect:3,altspawnselect:3,altstructur:[3,8],alwai:[5,9],among:5,amstrogm:2,amstrong:[2,9],analog:9,analys:[1,9],analysi:[0,8],angstrom:2,ani:[0,9],apel:9,appropi:[3,4],approxim:8,arg:[0,2],argument:[0,1,3,9],arm:9,around:10,arrai:[2,3,5,6],articl:9,arxiv:5,asid:9,asn:2,asp:2,aspect:9,ass:[6,9],assert:6,assertionerror:[0,6],assertsymmetriesdict:6,assess:9,assign:[3,6,9],atom2:2,atom:[0,2,3,6,8,9,10],atom_line_templ:2,atomcont:2,atomid:2,atomlist:2,atomnam:[2,6],atomseri:2,atomset:[0,8,9],attribut:[0,3,8],automat:[8,9],automateroundsadapt:10,automatesimul:0,avail:[4,9,10],averag:[3,9],awai:2,axi:1,backtrack:8,bactrackadaptivetrajectori:8,bandit:9,barcelona:10,base:[2,3,4,5,8,9],basenam:9,basestr:2,been:[4,7,9],befor:[0,9],begin:5,behavior:9,behaviour:5,being:9,belong:[3,6,9],below:9,best:[3,5,9],better:8,between:[2,3,9],big:9,bin:9,binari:9,bind:[1,9],biophys:9,block:[0,3,4,5,7,10],blocknam:7,bodi:0,boltzmann:9,bool:[0,1,2,3,4,6,7,9],bound:9,box:[0,4,8,9],box_cent:9,box_radiu:9,boxcent:9,boxradiu:9,bsc72755:9,bsc72:9,bsc:10,bug:[],build:[0,2,3,4,5],build_ext:9,buildclust:3,buildclusterspervalu:[],buildcontactmap:2,buildcontactmapwithrowmap:2,builder:3,buildnewclusteringandwriteinitialstructuresinnewsimul:0,buildnewclusteringandwriteinitialstructuresinrestart:0,buildoptimalpermutationcontactmap:2,buildrevtransitionmatrixfunct:8,buildspawningcalcul:5,buildspawningparamet:5,built:[9,10],bulid:3,bulk:9,bunch:9,burn:9,calcual:8,calcuat:5,calcul:[0,1,2,3,4,5,6,8],calculatecontactmapeigen:6,calculatecontactsvar:5,calculatecorrelationcontactmap:2,calculatedens:5,calculateepsilonvalu:5,calculateequilibrationlength:4,calculatenormalisedmetr:5,calculatenormaliseds:5,call:[2,8,9],calul:9,can:[3,8,9],carbon:[2,3],carri:[3,8],caution:9,ce1:2,cell:8,center:[2,3,4,8,9,10],centerpair:3,centroid:2,certain:[0,3,9],ch2:2,chain:[2,3,8,9],chang:[0,3,5,9],changelog:10,check:[0,2,3,4,6],checkattribut:3,checker:6,checkexitcondit:4,checkintegrityclusteringobject:0,checkmetricexitconditionmultipletrajsinrestart:0,checksymmetrydict:0,chem:9,choos:9,chosen:3,chronolog:3,classic:8,clean:3,cleancontactmap:3,cleanpq:3,cleanup:6,clobject:1,closer:[3,9],cluster:[0,1,2,4,5,6,8,10],cluster_threshold_dist:9,clustercontactmap:[2,3],clusterepochtraj:0,clusterequilibrationstructur:4,clustering_typ:3,clusteringblock:[0,3],clusteringbuild:3,clusteringevalu:3,clusteringexitcondit:4,clusteringhook:0,clusteringmethod:0,clusteringobject:[0,4,6],clusteringobjectpath:6,clusteringoutputobject:0,clusteringtyp:0,clusteringutil:0,clusteriter:3,clusterleav:3,clusternum:3,clusterpreviousepoch:0,clustersfilt:0,clustersperepoch:[],clusterspervalu:[],cmatom:2,cmclusteringevalu:3,cmsimilarityevalu:3,code:[3,8,10],col:3,collect:6,color:[1,8],column1:1,column2:1,column:[0,1,2,3,4,8,9],columnofreportfil:3,com:[2,4,9],combin:9,come:0,command:[0,1],common:9,compar:[2,3,5,9],comparison:9,compat:[3,8],compil:9,complet:[0,8,9],complex:[4,9],comprehens:9,comput:[2,6,9],computecomdiffer:2,computecomsquareddiffer:2,computenonsymmatom:2,computermsd2:2,computermsd:2,computesquaredcentroiddiffer:2,computetemperatur:5,computetotalmass:2,cond:1,condit:[0,3,4,5,6,8,9],condtion:4,conf:9,confid:9,configur:9,conform:[1,2,3,6,8,9],conformationnetwork:3,consdid:1,consid:[1,2,3,5,8,9],consider:8,consist:3,constant:[0,3,4,5,9],conta:0,contact:[2,3,5,6,8,9],contactmap:[2,3,6,8],contactmapaccumulativeclust:3,contactsclust:3,contactsclusteringevalu:3,contactsvari:5,contactthreshold:[3,5,9],contactthresholddist:[2,3,9],contain:[0,1,2,3,4,5,6,7,9],contanct:2,content:2,continousdens:5,continu:[5,8,9],continuousdensitycalcul:5,control:[0,1,3,4,5,6,7,8,10],control_fil:7,controlfil:[0,1,7,9],controlfileblock:7,controlfilevalid:[0,8],convent:8,convert:[6,9],convert_trajectory_to_pdb:6,converttrajectori:9,coordin:[2,4,5,8,9],coords1:6,coords2:6,copi:[0,4,9],copyinitialstructur:0,correct:[1,9],correctrmsd:0,correl:[2,3,8,9],correspond:[1,2,3,4,9],count:[2,9],countcontact:2,creat:[0,1,2,3,4,5,6,8],createcontactmap:2,createmultiplecomplexesfilenam:4,createpathwaytoclust:3,createselectionstr:2,createsymboliclink:4,criteria:9,current:[0,1,4,5,9],currentepoch:5,custom:6,cython:[8,9],daniel:9,data:[0,1,4,9],deal:9,debug:[0,9],decim:9,decreas:9,def:9,defin:[3,6,9],definit:5,degeneraci:[0,3,5],degeneracyofrepres:5,delet:3,deltar:5,densiti:[3,5,8],density_calculator_typ:5,densitycalcul:0,densitycalculatorbuild:5,densitycalculatorheavisid:5,densitycalculatortyp:0,densityspawningcalcul:5,depend:[5,9],deprec:[1,5],describ:9,descript:[9,10],desir:3,destin:0,detail:9,detect:8,determin:[3,9],develop:[3,10],diagram:9,dict:[0,3,4,5,6,7,9],dictionari:[0,2,4,6,7,8],dictonari:[0,4],did:9,differ:[1,2,3,5,9],differencedist:3,differenti:8,diffus:9,dir:9,directori:9,discov:3,discoveri:[1,3,8],discret:9,disk:[4,9],distanc:[0,2,3,4,9],distancecom:6,distribut:[5,9],divid:9,divideinverselyproportionaltoarrai:5,divideprocessorsmetricproport:5,divideproportionaltoarrai:5,dividetrajaccordingtoweight:5,document:[3,4,8,9],doe:9,don:4,done:9,due:8,dure:[],dynam:10,each:[3,4,5,6,8,9],eapm:10,earli:3,easi:8,edg:3,edgelist:3,effect:9,effici:[3,9],eigenvalu:6,eigenvector:6,either:9,electron:10,element:[3,6,9],emphasi:9,empti:[2,6],emptyclust:3,encod:3,encourag:9,end:[3,8],energi:[5,8,9,10],enhanc:[9,10],enough:[3,9],ensur:[3,5,7],ensure_connectivity_msm:6,enter:9,entranc:9,entri:3,eoferror:6,epoch:[0,1,3,4,5,6,8,9],epochdir:4,epochoutputpathtemplet:0,epsilon:[5,8,9],epsilon_variation_typ:5,epsilondegeneracycalcul:5,epsmax:5,equal:9,equilbr:9,equilibr:[4,8,9],equilibrationclust:9,equilibrationlastsnapshot:9,equilibrationlength:9,equilibrationmod:9,equilibrationselect:9,equival:9,equivalentresnam:2,error:7,estimatedg:8,evalu:[3,6,8,9],evaluatecorrel:2,evaluatedifferencedist:2,evaluatejaccard:2,event:1,eventu:9,everi:4,evolut:9,exampl:10,example1:9,example2:9,except:9,exclud:0,execut:9,exempl:9,exist:[4,5,6,8,9],exit:[0,4,8,9],exitcondit:[8,9],exitcondition_typ:4,exitconditionblock:4,exitconditionbuild:4,exitcontin:5,exitcontinousdensitycalcul:5,exitcontinu:[8,9],exitvalu:9,exp:9,expand:0,expandinitialstructureswildcard:0,experi:9,explor:[5,9,10],expos:9,extend:[1,6],extendreportwithrmsd:1,extent:8,extract:[0,1,3,4,6,9],extractcentroid:2,extractcom:2,extractcoord:8,extrem:[5,9],fail:9,fals:[1,2,3,4,6,9],fast:[5,9],fastdegeneracycalcul:5,faster:8,fdt:3,featur:[],few:9,field:9,fifth:9,file:[0,1,2,3,4,5,6,7,8,10],filenam:[0,1,3,6,9],filter:[0,4],filterclustersaccordingtobox:0,finalepoch:0,find:[0,3],finddifferentclustersforallepoch:[],finddifferentclustersinepoch:[],findfirstrun:0,fine:9,finish:9,first:[0,1,2,3,4,8,9],firstrun:0,fit:0,five:9,fix:[],fixedcent:9,fixedreport_i:0,fixreportssymmetri:0,flag:[0,3,4],flow:9,folder:[0,1,3,4,6,9],foldersfirstbindingev:0,follow:[3,5,8,9],form:3,format:[0,2,3,6,8,9],former:9,found:[0,3,4,6,7],fraction:9,fragment:1,framework:9,free:8,freeenergi:8,from:[0,1,2,3,4,5,6,9],futur:9,gen_atom_nam:6,gener:[0,1,9],generalparam:[7,10],generatenestedstr:1,generateprintstr:1,generatetrajectoryselectionstr:0,geometri:9,get:[2,3,5,6,9],get_epoch_fold:6,get_mdtraj_object_pdbstr:6,get_pdb_str:2,getalldifferentvalu:[],getalltrajectori:3,getatom:2,getatomcoord:2,getatomnam:6,getcentroid:2,getclust:3,getclusteringsummarycont:[],getcom:2,getcontact:3,getequilibrationcontrolfil:4,getinnerlimit:3,getmaxthreshold:3,getmetr:[3,5],getmetriccolumn:4,getmetricfromcolumn:3,getmetricsfromreportsinepoch:6,getnextiterationbox:4,getnumberclust:3,getnumberofatom:2,getnumberofclustersperepochforgivencolumn:[],getoptimalmetr:3,getpelecontrolfiledict:6,getreportandtrajectorywildcard:6,getrmsd:6,getsasacolumnfromcontrolfil:6,getsiz:5,getsnapshot:6,getsortedeigen:6,getstationarydistr:6,gettopologyfil:6,gettotalnumberofclustersperepoch:[],gettrajnum:6,getworkingclusteringobjectandreclusterifnecessari:0,gilabert:9,github:[3,10],give:9,given:[0,5,6,8,9],gln:2,glu:2,gly:2,gnuplot:[1,9],gnuplotstr:1,gpf:9,great:9,greater:[8,9],grop:10,gropu:2,group:[1,3,6,8,9],guallar:9,guid:9,had:8,handl:[8,9],has:[0,2,3,4,7,9],haschang:9,hasexitcondit:4,have:[0,3,9],heavi:[2,3,9],heavisid:[3,5,9],heavyatom:[],help:9,helper:[2,3,5],hetero:2,hid:[2,9],hie:2,hip:[2,9],histidin:9,histogram:[8,9],hook:10,hook_funct:9,how:9,howev:9,http:[3,9],identifi:[3,9],ignor:9,ignorefirstrow:3,imag:1,implement:[8,9],improv:8,includ:0,incorrect:8,increas:9,independ:[5,6,8,9],independentrunscalcul:5,index:[3,4,6,8,9,10],indexerror:0,indic:[0,2,9],info:2,inform:[2,3,5,6,9],inherit:3,initi:[0,4,5,8,9],initial1:9,initial2:9,initialis:2,initialstructur:[0,4,9],initialstructuresasstr:4,initialstructureswildcard:0,initialstructurewildcard:0,innefici:9,inplac:9,input:[0,8],inputfiletempl:4,inputtempl:4,insert:3,insertclust:3,instal:10,instanc:[3,5],integ:[2,3,9],interact:9,interest:[3,9],interfac:[8,9],intersect:3,interst:6,intial:9,introduc:3,invers:[5,8,9],inverselyproport:[5,9],inverselyproportionaltopopulationcalcul:5,ion:9,isel:3,isfrompdbfil:2,isheavyatom:2,isheteroatom:2,ispdb:2,isprotein:2,issimilarclust:3,issu:9,iter:[0,3,4,5,6,9],iteraet:5,its:[2,3,6,8,9],jaccard:[3,8,9],joan:9,join_pdb_lin:2,journal:9,json:[0,9],jsondict:[4,6],jsonparam:0,jsonstr:4,just:5,keep:[8,9],keepachangelog:[],kei:[3,9],kept:9,keyerror:2,keyword:3,kind:1,kindofprint:1,know:0,kwarg:3,lambda:6,landscap:[9,10],last:[0,3,4,5,9],lastsnapshot:[3,8],lead:9,leader:[3,9],learn:5,lecina:9,led:1,left:5,len:9,lenght:4,length:9,less:[2,9],letter:3,leu:2,librari:9,licens:10,life:9,ligand:[0,1,2,3,4,9],ligandchain:9,ligandlist:2,ligandreschain:2,ligandresnam:[2,9],ligandresnum:[2,9],like:[5,6,9],limit:3,limitmax:3,limitslop:3,line:[0,1,2,3,6,8,9],linear:[5,9],linearvari:5,link:[4,8],list:[0,1,2,3,4,5,6,8,9],liststructur:6,load:2,loadparam:0,local:9,location_of_adaptivepel:9,log:5,logvariableepsilon:5,look:9,lose:9,lowesteigenvector:6,mai:9,main:[0,1,9],maintain:3,make:[6,8,9],makefold:6,makepng:0,makeworkingcontrolfil:4,mandatori:9,mani:[2,9],manual:10,map:[2,3,4,6,8,9],marenostrum:9,mark:[4,9],mass:[2,4,9],match:[0,9],matric:9,matrix:[2,8,9],max:[3,4,8,9],maxepsilon:9,maxepsilonwindow:9,maxim:[2,5],maximum:[2,3,5,9],mcgibbon:9,mdtraj:[6,9],mean:[1,9],measur:9,median:1,meet:[6,9],member:3,merg:0,mergefilteredclustersaccordingtobox:0,met:[2,4],metast:9,method:[0,2,3,8,9,10],metric:[0,1,3,4,5,6,8,9],metriccol:[3,4,9],metriccolumninreport:9,metricexitcondit:4,metricmultipletraj:4,metricmultipletrajectori:[8,9],metricmultipletrajsexitcondit:4,metricvalu:4,metricweight:9,middl:5,might:9,min:[3,5,9],minepsilon:9,minim:[4,9],minimum:[3,9],minor:[8,9],mit:10,mode:9,model:[9,10],modemovingbox:9,modern:9,modul:[9,10],molecul:[1,9],molecular:[9,10],moment:9,more:[3,8,9],most:9,move:[0,8],msm:6,much:9,multi:9,multipl:[0,8,9],multiplecomplex:9,must:[3,5],name:[0,1,2,3,4,6,8,9],nan:8,nanomet:9,nativ:[0,1,6,9],nativepdb:6,nativestructur:[0,9],natur:9,ncluster:5,ndarrai:[1,6],necessari:9,need:[0,9],needtoreclust:0,neg:6,network:[3,8],networkx:3,newclusteringmethod:0,newer:8,next:[3,4,5],node:3,non:[0,3,4,5,6,8,10],none:[0,1,3,4,5,6,9],nonsymmetricalatomsset:2,normal:5,normalisearrai:5,notabl:8,now:8,nprocessor:4,ntraj:[4,6],nulldensitycalcul:5,nullspawningcalcul:5,number:[0,1,2,3,4,5,6,8,9],numberequilibrationstructur:9,numberofclust:[0,9],numberofepoch:[],numberofpelestep:9,numberofsnapshot:4,numbertrajectori:9,numbertrajectoriess:9,numcol:3,numpi:[2,3,6],numtraj:[4,5],object:[0,1,2,3,4,5,6,8,9],objectpath:0,obtain:[0,9],occur:9,oct:5,ocur:[],od1:2,oe1:2,old:8,oldclusteringmethod:0,one:[2,4,5,9],ones:0,onl:[],onli:[0,1,3,5,8,9],open:9,optim:[3,8,9],option:[1,3,4,9],optionalclass:9,order:[3,9],org:9,origclust:3,origin:[0,9],originalcontrolfil:0,other:[8,9],otherwis:[2,3,9],otion:8,ought:9,ouput:6,our:9,out:[3,8],outlin:10,output:[0,1,3,5,6,8,10],output_fil:6,output_fold:6,output_path:9,output_pdb:9,outputdir:6,outputfold:[0,4,6],outputobject:3,outputpath:[0,1,3,4,6,9],outputpathconst:[0,4,5],outsid:9,outupt_pdb:9,over:[3,4,8,9],overal:9,overcom:9,overview:10,oxygen:9,packag:[8,10],page:[9,10],pair:9,palettemodifi:1,paper:9,parallel:8,param:[0,2,5,9],paramet:[0,1,2,3,4,5,6,7,8],pars:[0,1,2,4,6],parsearg:[0,1],parseargu:[0,1],part:4,partial:0,particular:[0,5,9],pass:[1,3,9],path:[0,1,2,3,4,5,6,8,9],pathwai:3,pdb1:2,pdb2:2,pdb:[0,1,2,3,4,5,6,8,10],pdbfile:2,pdbobj:2,pdbstr:[],pele:[0,3,4,6,8,10],pele_rev12025_mpi:9,pele_step:9,pelecontrolfiledict:4,pelecontrolfiledictionari:0,pelesimul:4,pelestep:9,per:[1,9],perform:[3,5,8,10],period:9,permit:[3,9],permut:2,persist:9,phe:2,pickl:[3,8],piec:5,plan:9,plot3dnetwork:8,plot:[1,8,9],plotadapt:[0,8,9],plotclusterspervalu:[],plotcontactshistogram:[],plotspawningclust:8,pmf_xyzg:6,png:[1,9],poch:0,pocket:9,point:[1,3,8,9],popul:[3,5,8,9],pose:9,posibl:8,posit:[3,6],possibl:[0,3,7,8,9],potenti:9,precis:[8,9],prefer:[3,9],prepar:3,preparepelecontrolfil:0,present:[3,9],previo:3,previou:[0,1,3,9],print:[2,3,6,9],printatom:2,printclust:3,printhelp:[],printwithlin:1,prioriti:[3,8],pro:2,procedur:[4,8,9],process:3,processor:[4,5,9],processorstoclustermap:4,program:[0,9],project:8,propag:9,proper:8,properli:0,proport:[5,9],proportin:8,proportion:9,protein:[2,3,9,10],proteinlist:2,proton:9,provid:[0,4,9],publicli:10,purpos:[3,5],pyemma:8,pyemma_script:8,python2:8,python3:8,python:[3,6,8,9,10],pythonpath:9,quadrat:8,queue:[3,8],radiu:9,rais:[0,2,6,7],random:9,randomli:8,rang:1,ratio:[3,5,9],ration:9,rawdata:8,reach:9,reaction:5,read:[0,4,6],readclusteringobject:6,readcontrolfil:1,readmappingfromdisk:4,readpdb:2,real:9,reap:[5,8],reapcalcul:5,reclust:[0,9],recommend:9,reconstruct:[3,8],recov:9,recreat:1,redirect:9,redo:0,redon:0,refer:9,regardless:9,region:9,regular:9,reinforc:5,rel:[8,9],relat:[0,1,2,4,8,9],reli:9,reload:0,remov:[0,6],replotfirst:1,report:[0,1,3,4,6,9],report_:9,reportbasefilenam:[3,4],reportfil:[0,1],reportfilenam:[4,9],reportnam:[1,6],reportpath:9,reportwildcard:4,repres:[0,1,3,4,8,9],represent:6,requier:9,requir:[3,9],reschain:[2,3],residu:[0,2,3,4,8,9],resnam:[0,2,3,4,6],resnum:[2,3,8],respect:5,rest:[4,5,9],restart:[0,8,9],result:[3,9],resum:9,retrac:3,retriev:3,return_sign:5,rev12025:9,rew:5,reward:[5,9],rewrit:9,right:5,rmsd:[0,1,2,3,4,6,8],rmsdcalcul:[2,3],rmsdcalculator_object:3,rmsf:8,robert:9,robust:8,root:3,row:[2,9],run:[0,1,3,4,8,9],runequilibr:9,runner:0,runnerbuild:4,runningcontrolfil:4,runsimul:4,s41598:9,said:[3,8,9],same:[0,3,8,9],sameweight:[5,9],sameweightdegeneracycalcul:5,sampl:[0,5,7,9,10],sasa:4,save:[0,9],saveinitialcontrolfil:0,scientif:9,score:8,scratch:9,screenshot:9,script:[8,9],search:10,second:[2,9],see:[3,9],seed:[0,9],selct:5,select:[0,3,4,5,8,9],selectequilibratedstructur:4,selectequilibrationlastsnapshot:4,selectinitialboxcent:4,self:3,separ:[3,9],sequenti:[1,3,8],sequentiallastsnapshotclust:3,ser:2,serial:8,set:[1,3,4,8,9],set_properti:2,setcol:3,setup:9,setzeromap:4,sever:[5,8,9],shamsi:5,should:[6,9],show:9,shown:9,sign:[5,6],similar:[2,3,4,8,9],similarity_typ:3,similaritycolumn:4,similarityevalu:[3,9],similarityevaluatorbuild:3,similarityevaluatortyp:3,similariyevalu:3,simpl:9,simul:[0,1,6,8,10],simulatedann:5,simulatedannealingcalcul:5,simulation_typ:4,simulationoutput:9,simulationparamet:[0,4],simulationrunn:0,simulationrunnerblock:4,simulationrunnerparam:0,simulationtyp:[0,3],site:9,size:[3,5,9],sizepq:3,skip:8,smaller:9,snapshot:[1,3,4,5,6,8,9],snapshotnum:3,snaptshot:3,sole:9,solid:1,some:[8,9],sometim:3,sort:6,sound:9,sourc:[0,1,3,4,5,6,7],spawn:[0,3,8,10],spawning_typ:5,spawningalgorithmbuild:5,spawningblock:5,spawningbuild:5,spawningcalcul:[0,5],spawningparam:[0,5],spawningtyp:0,specif:3,specifi:[0,1,3,6,7,9],speed:[8,9],split:5,splittrajectori:9,squar:2,squareddist:2,stand:9,standard:9,start:[4,5,8,9],state:[5,9],statist:1,std:1,step:[1,4,5,9],stepsperepoch:1,stepsperrun:1,still:9,stop:9,store:[0,3,6,8,9],str:[0,1,3,4,5,6,7,9],strategi:[5,9],string:[0,1,2,3,4,6,8,9],struct:9,structur:[0,1,3,4,5,6,8,9],strucutr:3,strutctur:[0,4],studi:9,sub:3,subclass:5,subclust:[3,8],subdirectori:9,subpackag:[8,9,10],subset:9,substitu:4,substitut:[0,4],suffici:9,sum:5,summar:9,summari:[3,9],summaryfil:[],supercomput:10,suport:8,support:[8,9],surfac:9,symbol:[4,8],symcontactmapevalu:3,symmetr:[2,3,9],symmetri:[0,1,2,3,6,8,9],symmetricalatomid:2,symmetricatom:2,symmetrycontactmapevalu:[2,3],symmetryevalu:3,symtorowmap:2,system:[0,4,9],tab:3,take:[0,1,9],target:3,temperatur:9,templat:[0,1,4],templet:[0,4],templetizedclusteringsummaryfil:[],templetizedcontrolfil:[4,6],templetizedpelecontrolfil:9,tenth:9,termin:9,test:[0,4,8,9],testsimul:4,than:[2,3,8,9],thei:4,them:[3,8,9],theori:9,therefor:9,theshold:[0,9],thi:[3,5,6,8,9],third:[1,8,9],those:9,thr:2,three:[3,5,9],threshold:[0,1,3,9],threshold_calculator_typ:3,thresholdcalcul:0,thresholdcalculatorbuild:3,thresholdcalculatorconst:3,thresholdcalculatorheavisid:3,thresholdcalculatortyp:0,thresholdcaulcualtor:3,thresholdradiu:3,time:[8,9],tini:9,tinker:9,titl:6,tmpfolder:6,tmpinitialstructurestempl:[0,4],togeth:3,tol:6,toler:6,tool:9,top:9,topolog:[0,1,3,4,5,6,9],topology_fil:[0,5],topoloi:6,total:[2,9],totalmass:2,totalnumberofstep:1,toward:9,traj:6,trajecotori:0,trajecotri:6,trajectori:[0,1,3,4,5,6,8,10],trajectory_0_3:9,trajectory_10:9,trajectory_3:9,trajectoryfil:6,trajfilenam:6,trajnum:3,trajposit:3,trajs_rang:1,trajtodistribut:5,trajtodivid:5,trajwildcard:4,trantion:3,tree:[3,8],treshold:[3,9],tri:9,trp:2,tune:9,tupl:[1,3],two:[1,2,3,9],type:[0,2,3,7,9],typeevalu:3,typic:9,tyr:2,ucb:[5,8,9],ucbcalcul:5,unbind:[1,9],uncheck:4,under:10,unicod:8,uniformli:9,union:3,univoqu:9,unnecessari:4,unreleas:[],until:[8,9],updat:[3,4],updatecoord:2,updateindex:3,updatemappingprocessor:4,upper:9,usag:9,use:[0,1,3,9],use_beta:6,used:[0,4,8,9],useful:[3,9],user:10,uses:[5,9],using:[0,1,3,8,9],util:0,val:2,valid:0,validateblock:7,validategeneralblock:7,valu:[0,1,2,3,4,5,6,9],valueerror:7,varepsilontyp:9,vari:9,variableepsilon:[5,9],variableepsilondegeneracycalcul:5,variat:[5,9],variationwindow:9,variou:8,verbos:[3,6],veri:9,version:[2,9],victor:9,visibl:8,visual:[3,8],volum:9,wai:[5,8,9],want:9,warn:7,weight:[5,9],weigth:9,well:9,wether:[0,1,3,4,9],what:0,when:[0,8,9],where:[0,1,2,3,4,5,6,8,9],wheter:[1,7],whether:[0,1,3,9],which:[2,3,4,5,9],whole:9,whom:2,whose:0,wich:[2,3],wikipedia:9,wildcard:[0,6,8],within:9,without:9,work:[0,9],workingcontrolfilenam:4,worst:9,would:9,wrapper:[2,3],write:[1,2,3,4,5,6,9],write_mdtraj_object_pdb:6,write_pdb_clust:6,write_xtc_to_pdb:6,writeal:3,writeallclusteringstructur:9,writeclusteringstructur:0,writeclustermetr:3,writeconformationnetwork:3,writeconformationnodepopul:3,writefdt:3,writemappingtodisk:4,writeoutput:3,writepathwayoptimalclust:3,writepathwaytrajectori:3,writepdb:[2,3],writeprecisepathtosnapshot:[0,8],writespawninginitialstructur:5,writespawningstructur:3,writestructur:6,writetopologyfil:0,writetrajtosnapshot:8,written:9,www:9,xcol:1,xtc:[5,6,9],ycol:1,yes:3,you:9,your:9,zero:[4,6,9]},titles:["AdaptivePELE \u2013 Package Description","analysis Package","atomset Package","clustering Package","simulation Package","spawning Package","utilities Package","validator Package","Changelog","User Manual","Welcome to AdaptivePELE\u2019s documentation!"],titleterms:{"new":8,adaptivepel:[0,10],adaptivesampl:0,analysi:[1,9],atomset:2,automateroundsadapt:0,behaviour:8,block:9,bug:8,calcul:9,chang:8,changelog:8,cluster:[3,9],clusteringtyp:3,clusteringutil:6,contactmap:9,content:10,control:9,controlfilevalid:7,correctrmsd:1,densiti:9,densitycalcul:5,densitycalculatortyp:5,descript:0,document:10,dynam:9,exampl:9,featur:8,file:9,fix:8,foldersfirstbindingev:1,from:8,generalparam:9,hook:9,indic:10,instal:9,makepng:1,manual:9,modul:[0,1,2,3,4,5,6,7],non:9,numberofclust:1,outlin:9,output:9,overview:9,packag:[0,1,2,3,4,5,6,7],paramet:9,pdb:9,pele:9,plotadapt:1,previou:8,rmsd:9,simul:[4,9],simulationrunn:4,simulationtyp:4,spawn:[5,9],spawningtyp:5,subpackag:0,tabl:10,templet:9,thresholdcalcul:[3,9],thresholdcalculatortyp:3,trajectori:9,unreleas:[],user:9,util:6,valid:7,version:8,welcom:10,writeclusteringstructur:1,writeprecisepathtosnapshot:1}})