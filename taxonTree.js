$(document).ready(function() {
  // Get JSON data
  treeData = {
    "name": "Education, training and skills",
    "children": [
      {
        "name": "School curriculum",
        "children": [
          { "name": "Early years curriculum" },
          {
            "name": "Primary curriculum, key stage 1",
            "children": [
              {"name": "Assessments (key stage 1)"},
              {"name": "English  (key stage 1)"},
              {"name": "Maths (key stage 1)"},
              {"name": "Phonics"},
              {"name": "Programmes of study  (key stage 1)"},
              {"name": "Science (key stage 1)"},
              {"name": "Tests (key stage 1)"}
            ]
          },
          {
            "name": "Primary curriculum, key stage 2",
            "children": [
              {"name": "Assessments  (key stage 2)"},
              {"name": "English  (key stage 2)"},
              {"name": "Maths (key stage 2)"},
              {"name": "Programmes of study (key stage 2)"},
              {"name": "Science (key stage 2)"},
              {"name": "Tests (key stage 2)"}
            ]
          },
          {
            "name": "Secondary curriculum, key stage 3 and key stage 4 (GCSEs)",
            "children": [
              {"name": "GCSE subject content and requirements"},
              {"name": "Key stage 3 and 4 exam marking, qualifications and results"},
              {"name": "GCSE changes and reforms"},
            ]
          },
          {"name": "Key stage 5 (AS and A Levels)"},
          {"name": "Spiritual, moral, social and cultural development"},
          {"name": "Personal, social, health and economic education"},
        ],
      },
      {
        "name": "Running and managing a school",
        "children": [
          {"name": "School admissions"},
          {"name": "Setting up or changing the status of a school"},
          {
            "name": "Funding and finance for schools and academies",
            "children": [
              {"name": "Procurement for schools"},
              {"name": "School insurance and risk management"},
              {"name": "Academy funding and compliance"},
              {"name": "Academy financial management and reporting"},
              {"name": "Maintained school and local authority funding"},
              {"name": "Pupil Premium"},
              {"name": "Schools forums"},
              {"name": "Funding for 16 to 19 year olds"},
            ],
          },
          {"name": "Managing school data"},
          {"name": "School governance"},
          {"name": "School buildings and premises"},
          {"name": "Recruiting and managing school staff"},
          {"name": "School meals, transport and uniform"},
          {"name": "Careers guidance in schools"},
          {"name": "School complaints and whistleblowing"},
        ],
      },
      {
        "name": "Pupil wellbeing, behaviour and attendance",
        "children": [
          {"name": "Health and safety in schools"},
          {"name": "Safeguarding pupils"},
          {"name": "School attendance and absence"},
          {"name": "School bullying"},
          {"name": "School discipline and exclusions"},
        ],
      },
      {
        "name": "School inspections and performance",
        "children": [
          {"name": "Inspection of maintained schools and academies"},
          {"name": "Inspection of independent schools"},
          {"name": "inspection of boarding and residential schools"},
          {"name": "Inspection of British schools overseas"},
          {"name": "Ofsted inspection reports and ratings"},
        ],
      },
      {
        "name": "Teaching and leadership",
        "children": [
          {"name": "Teaching standards, conduct and practice"},
          {"name": "Teacher records"},
          {"name": "Teacher pay, pensions and conditions"},
          {
            "name": "Teacher training and professional development",
            "children": [
              {"name": "School leadership"},
              {"name": "Initial Teacher Training (ITT)"},
              {"name": "Qualified Teacher Status (QTS)"},
              {"name": "Subject Knowledge Enhancement (SKE)"},
              {"name": "National Professional Qualification for Headship (NPQH)"},
            ],
          },
        ],
      },
      {
        "name": "Alternatives to school",
        "children": [
          {"name": "Home schooling"},
          {"name": "Alternative provision and pupil referral units"},
        ],
      },
      {
        "name": "Further and higher education, skills and vocational training",
        "children": [
          {
            "name": "Apprenticeships, traineeships and internships",
            "children": [
              {"name": "Types of apprenticeships"},
              {"name": "Being an apprentice"},
              {"name": "Traineeships"},
              {"name": "Internships"},
              {"name": "Employers and training organisations"},
            ],
          },
          {"name": "Careers guidance in further and higher education"},
          {"name": "Learning Records Service (LRS)"},
          {"name": "Further and higher education courses and qualifications"},
          {
            "name": "Inspection and performance of further education providers",
            "children": [
              {"name": "Inspection of further education and skills providers"},
              {"name": "Inspection of residential provision in further education colleges"},
              {"name": "Ofsted inspection reports and ratings"},
            ],
          },
          {"name": "Running a further or higher education institution"},
          {"name": "Funding and finance for further or higher education providers"},
          {"name": "Adult and community learning"},
          {"name": "Education in prisons"},
        ],
      },
      {
        "name": "Funding and finance for students",
        "children": [
          {"name": "Student loans and sponsorship"},
          {"name": "Financial help for students who are parents or carers"},
          {"name": "Financial help for international students in the UK"},
        ],
      },
      {
        "name": "Pupils and students with special educational needs and disability (SEND)",
        "children": [
          {"name": "Special educational needs and disability (SEND) code of practice"},
          {"name": "Funding for special educational needs and disability (SEND)"},
          {"name": "Special educational needs and disability (SEND) support in schools"},
        ],
      },
      {"name": "Education of disadvantaged children"},
      {"name": "Support for education work in other countries"},
    ]
  }

  // Calculate total nodes, max label length
  var totalNodes = 0;
  var maxLabelLength = 0;
  // panning variables
  var panSpeed = 200;
  var panBoundary = 20; // Within 20px from edges will pan when dragging.
  // Misc. variables
  var i = 0;
  var duration = 750;
  var root;

  // size of the diagram
  var viewerWidth = 1448; //$(document).width();
  var viewerHeight = 815; //$(document).height();

  var tree = d3.layout.tree()
      .size([viewerHeight, viewerWidth]);

  // define a d3 diagonal projection for use by the node paths later on.
  var diagonal = d3.svg.diagonal()
      .projection(function(d) {
          return [d.y, d.x];
      });

  // A recursive helper function for performing some setup by walking through all nodes

  function visit(parent, visitFn, childrenFn) {
      if (!parent) return;

      visitFn(parent);

      var children = childrenFn(parent);
      if (children) {
          var count = children.length;
          for (var i = 0; i < count; i++) {
              visit(children[i], visitFn, childrenFn);
          }
      }
  }

  // Call visit function to establish maxLabelLength
  visit(treeData, function(d) {
      expand(d);
      totalNodes++;
      maxLabelLength = Math.max(d.name.length, maxLabelLength);

  }, function(d) {
      return d.children && d.children.length > 0 ? d.children : null;
  });


  // sort the tree according to the node names

  function sortTree() {
      tree.sort(function(a, b) {
          return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
      });
  }
  // Sort the tree initially incase the JSON isn't in a sorted order.
  sortTree();

  // TODO: Pan function, can be better implemented.

  function pan(domNode, direction) {
      var speed = panSpeed;
      if (panTimer) {
          clearTimeout(panTimer);
          translateCoords = d3.transform(svgGroup.attr("transform"));
          if (direction == 'left' || direction == 'right') {
              translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
              translateY = translateCoords.translate[1];
          } else if (direction == 'up' || direction == 'down') {
              translateX = translateCoords.translate[0];
              translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
          }
          scaleX = translateCoords.scale[0];
          scaleY = translateCoords.scale[1];
          scale = zoomListener.scale();
          svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
          d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
          zoomListener.scale(zoomListener.scale());
          zoomListener.translate([translateX, translateY]);
          panTimer = setTimeout(function() {
              pan(domNode, speed, direction);
          }, 50);
      }
  }

  // Define the zoom function for the zoomable tree

  function zoom() {
      svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }


  // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

  // define the baseSvg, attaching a class for styling and the zoomListener
  var baseSvg = d3.select("#tree-container").append("svg")
      .attr("width", viewerWidth)
      .attr("height", viewerHeight)
      .attr("class", "overlay")
      .call(zoomListener);


  // Helper functions for collapsing and expanding nodes.

  function collapse(d) {
      if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
      }
  }

  function expand(d) {
      if (d._children) {
          d.children = d._children;
          d.children.forEach(expand);
          d._children = null;
      }
  }

  var overCircle = function(d) {
      selectedNode = d;
      updateTempConnector();
  };
  var outCircle = function(d) {
      selectedNode = null;
      updateTempConnector();
  };

  // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

  function centerNode(source) {
      scale = zoomListener.scale();
      x = -source.y0;
      y = -source.x0;
      x = x * scale + viewerWidth / 2;
      y = y * scale + viewerHeight / 2;
      d3.select('g').transition()
          .duration(duration)
          .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
      zoomListener.scale(scale);
      zoomListener.translate([x, y]);
  }

  // Toggle children function

  function toggleChildren(d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
      } else if (d._children) {
          d.children = d._children;
          d._children = null;
      }
      return d;
  }

  // Toggle children on click.

  function click(d) {
      if (d3.event.defaultPrevented) return; // click suppressed
      d = toggleChildren(d);
      update(d);
      centerNode(d);
  }

  function update(source) {
      // Compute the new height, function counts total children of root node and sets tree height accordingly.
      // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
      // This makes the layout more consistent.
      var levelWidth = [1];
      var childCount = function(level, n) {

          if (n.children && n.children.length > 0) {
              if (levelWidth.length <= level + 1) levelWidth.push(0);

              levelWidth[level + 1] += n.children.length;
              n.children.forEach(function(d) {
                  childCount(level + 1, d);
              });
          }
      };
      childCount(0, root);
      var newHeight = d3.max(levelWidth) * 50; // 25 pixels per line
      tree = tree.size([newHeight, viewerWidth]);

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

      // Set widths between levels based on maxLabelLength.
      nodes.forEach(function(d) {
          // d.y = (d.depth * (maxLabelLength * 16)); //maxLabelLength * 10px
          // alternatively to keep a fixed scale one can set a fixed depth per level
          // Normalize for fixed-depth by commenting out below line
          d.y = (d.depth * 1200); //500px per level.
      });

      // Update the nodes…
      node = svgGroup.selectAll("g.node")
          .data(nodes, function(d) {
              return d.id || (d.id = ++i);
          });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) {
              return "translate(" + source.y0 + "," + source.x0 + ")";
          })
          // .on('click', click);

      nodeEnter.append("circle")
          .attr('class', 'nodeCircle')
          .attr("r", 0)
          .style("fill", function(d) {
              return d._children ? "lightsteelblue" : "#fff";
          });

      nodeEnter.append("text")
          .attr("x", function(d) {
              return d.children || d._children ? -10 : 10;
          })
          .attr("dy", ".35em")
          .attr('class', 'nodeText')
          .attr("text-anchor", function(d) {
              return d.children || d._children ? "end" : "start";
          })
          .text(function(d) {
              return d.name;
          })
          .style("fill-opacity", 0);

      // phantom node to give us mouseover in a radius around it
      // nodeEnter.append("circle")
      //     .attr('class', 'ghostCircle')
      //     .attr("r", 30)
      //     .attr("opacity", 0.2) // change this to zero to hide the target area
      // .style("fill", "red")
      //     .attr('pointer-events', 'mouseover')
      //     .on("mouseover", function(node) {
      //         overCircle(node);
      //     })
      //     .on("mouseout", function(node) {
      //         outCircle(node);
      //     });

      // Update the text to reflect whether node has children or not.
      node.select('text')
          .attr("x", function(d) {
              return 10;
          })
          .attr("text-anchor", function(d) {
              return "start";
          })
          .text(function(d) {
              return d.name//+" ("+d.number_of_tagged_content+" / "+d.number_of_tagged_guidance_content+")";
          });

      // Change the circle fill depending on whether it has children and is collapsed
      node.select("circle.nodeCircle")
          .attr("r", 4.5)
          .style("fill", function(d) {
              return d._children ? "lightsteelblue" : "#fff";
          });

      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + d.y + "," + d.x + ")";
          });

      // Fade the text in
      nodeUpdate.select("text")
          .style("fill-opacity", 1);

      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + source.y + "," + source.x + ")";
          })
          .remove();

      nodeExit.select("circle")
          .attr("r", 0);

      nodeExit.select("text")
          .style("fill-opacity", 0);

      // Update the links…
      var link = svgGroup.selectAll("path.link")
          .data(links, function(d) {
              return d.target.id;
          });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", function(d) {
              var o = {
                  x: source.x0,
                  y: source.y0
              };
              return diagonal({
                  source: o,
                  target: o
              });
          });

      // Transition links to their new position.
      link.transition()
          .duration(duration)
          .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
              var o = {
                  x: source.x,
                  y: source.y
              };
              return diagonal({
                  source: o,
                  target: o
              });
          })
          .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
          d.x0 = d.x;
          d.y0 = d.y;
      });
  }

  // Append a group which holds all nodes and which the zoom Listener can act upon.
  var svgGroup = baseSvg.append("g");

  // Define the root
  root = treeData;
  root.x0 = viewerHeight / 2;
  root.y0 = 0;

  // Layout the tree initially and center on the root node.
  update(root);
  centerNode(root);
});
